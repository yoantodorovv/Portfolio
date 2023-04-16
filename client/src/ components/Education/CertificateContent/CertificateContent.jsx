import { useEffect, useState } from 'react';

import { db, storage } from '../../../../services/firebase';
import { getDocs, collection } from '@firebase/firestore';
import { ref, getDownloadURL } from '@firebase/storage';

import { Carousel } from './Carousel/Carousel';

import styles from './CertificateContent.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export const CertificateContent = ({
    collectionFolder
}) => {
    const [frontEndCertificates, setFrontEndCertificates] = useState([]);
    const [backEndCertificates, setBackEndCertificates] = useState([]);
    const [englishCertificates, setEnglishCertificates] = useState([]);
    const [currentCertificate, setCurrentCertificate] = useState({});
    const frontEndCollectionRef = collection(db, `front-end`);
    const backEndCollectionRef = collection(db, `back-end`);
    const englishCollectionRef = collection(db, `english`);

    useEffect(() => {
        getDocs(frontEndCollectionRef)
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

                setFrontEndCertificates(tempCert);
            })
            .catch(err => console.log(err))

        getDocs(backEndCollectionRef)
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

                setBackEndCertificates(tempCert);
            })
            .catch(err => console.log(err))

        getDocs(englishCollectionRef)
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

                setEnglishCertificates(tempCert);
            })
            .catch(err => console.log(err))

        handleSetCurrentCertificate(certificates[0]);
    }, []);

    const handleSetCurrentCertificate = (certificate) => {
        console.log(certificate);

        if (certificate == null) {
            return;
        }

        const date = certificate.issuedOn.toDate();
        const options = { month: "short", day: "numeric", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-US", options);

        certificate['formattedDate'] = formattedDate;

        setCurrentCertificate(certificate);
    }

    let certificates = [];

    if (collectionFolder === 'front-end') {
        certificates = frontEndCertificates;
    } else if (collectionFolder === 'back-end') {
        certificates = backEndCertificates;
    } else if (collectionFolder === 'english') {
        certificates = englishCertificates;
    }

    return (
        <div className={styles['content']}>
            <div className={styles['carousel']}>
                <Carousel certificates={certificates} handleSetCurrentCertificate={handleSetCurrentCertificate} />
            </div>
            <div className={styles['line']}></div>
            <div className={styles['certificate-information']}>
                <h2>{currentCertificate?.name}</h2>
                <p className={styles['regular-p']}>Issued By: <span className={styles['highlight']}>{currentCertificate?.issuedBy}</span></p>
                <p className={styles['regular-p']}>Issued On: <span className={styles['highlight']}>{currentCertificate?.formattedDate}</span></p>
                <p className={styles['regular-p']}>Grade: <span className={styles['highlight']}>{!isNaN(currentCertificate?.grade) ? `${currentCertificate?.grade.toFixed(2)} / 6.00` : currentCertificate?.grade}</span></p>
                <p className={styles['regular-p']}>Description: <span className={styles['highlight']}>{currentCertificate?.description}</span></p>
                {
                    collectionFolder !== 'english'
                        ? (
                            <div className={styles['certificate-skills']}>
                                <h3>Skills</h3>
                                <div className={styles['skills-wrapper']}>
                                    {currentCertificate?.skills?.map(x => (
                                        <div key={x} className={styles['element']}>
                                           <p>{x}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                        : <div className={styles['certificate-skills']}></div>
                }
                <a className={styles['validity-link']} href={currentCertificate?.validityLink} target='_blank'>
                    <FontAwesomeIcon className={styles['icon']} icon={faShieldHalved} />
                    Check Certificate Validity
                </a>
            </div>
        </div>
    );
}