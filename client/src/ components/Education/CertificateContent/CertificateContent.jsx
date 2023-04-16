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
    const [currentCertificate, setCurrentCertificate] = useState({});
    const collectionRef = collection(db, `${collectionFolder}`);

    useEffect(() => {
        getDocs(collectionRef)
            .then(data => {
                const tempCert = data.docs.map(x => ({ ...x.data(), id: x.id }));

                tempCert.forEach(x => {
                    const imageRef = ref(storage, `certificates/${x.name}.png`)

                    getDownloadURL(imageRef)
                        .then(url => {
                            x.imageUrl = url;
                        })
                        .catch(err => console.log(err))
                })

                setCertificates(tempCert);
            })
            .catch(err => console.log(err))

        handleSetCurrentCertificate(certificates[0]);
    }, [collectionFolder]);

    const handleSetCurrentCertificate = (certificate) => {
        if (certificate == null) {
            return;
        }

        const date = certificate.issuedOn.toDate();

        const options = { month: "short", day: "numeric", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-US", options);

        certificate['formattedDate'] = formattedDate;

        setCurrentCertificate(certificate);
    }

    return (
        <div className={styles['content']}>
            <div className={styles['carousel']}>
                <Carousel certificates={certificates} handleSetCurrentCertificate={handleSetCurrentCertificate} />
            </div>
            <div className={styles['line']}></div>
            <div className={styles['certificate-information']}>
                <h2>{currentCertificate?.name}</h2>
                <p>Issued By: {currentCertificate?.issuedBy}</p>
                <p>Issued On: {currentCertificate?.formattedDate}</p>
                <p>Grade: {currentCertificate?.grade === 'number' ? currentCertificate?.grade.toFixed(2) : currentCertificate?.grade}</p>
            </div>
        </div>
    );
}