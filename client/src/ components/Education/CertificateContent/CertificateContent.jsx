import { useEffect, useState } from 'react';

import { db, storage } from '../../../../services/firebase';
import { getDocs, collection } from '@firebase/firestore';
import { ref, getDownloadURL } from '@firebase/storage';

import { Carousel } from './Carousel/Carousel';

import styles from './CertificateContent.module.scss'

export const CertificateContent = ({
    collectionFolder
}) => {
    const [certificates, setCertificates] = useState([]);
    const [imageCertificateObj, setImageCertificateObj] = useState({});
    const [currentCertificate, setCurrentCertificate] = useState(null);
    const collectionRef = collection(db, `${collectionFolder}`);

    useEffect(() => {
        console.log('change');

        getDocs(collectionRef)
            .then(data => {
                data.docs.forEach(x => {
                    const imageRef = ref(storage, `certificates/${x.data().name}.png`)

                    getDownloadURL(imageRef)
                        .then(url => {
                            setImageCertificateObj(state => ({...state, [x.data().name]: url}));
                        })
                        .catch(err => console.log(err))
                })

                handleSetCertificates(data);
            })
            .catch(err => console.log(err))
    }, [collectionFolder]);

    const handleSetCertificates = (data) => {
        setCertificates(data.docs.map(x => {
            console.log(imageCertificateObj);
            
            return ({ ...x.data(), id: x.id, imageUrl: imageCertificateObj[x.data().name]})
        }))
    }

    const handleSetCurrentCertificate = (certificate) => {
        setCurrentCertificate(certificate);
    }

    return (
        <div className={styles['content']}>
            <div className={styles['carousel']}>
                <Carousel certificates={certificates} handleSetCurrentCertificate={handleSetCurrentCertificate} />
            </div>
            <div className={styles['line']}></div>
            <div className={styles['certificate-information']}>
                <h2>Name</h2>
                <p>Issued By: {currentCertificate?.issuedBy}</p>
                <p>Issued On: {currentCertificate?.issuedOn}</p>
                <p>Grade: {currentCertificate?.Grade}</p>
            </div>
        </div>
    );
}