import { useState } from 'react';

import { CertificateContent } from './CertificateContent/CertificateContent';

import styles from './Education.module.scss'

export const Education = ({
    educationRef
}) => {
    const resetState = {
        'front-end': false,
        'back-end': false,
        english: false,
        diplomas: false,
    }
    const [isActive, setIsActive] = useState({
        'front-end': true,
        'back-end': false,
        english: false,
        diplomas: false,
    });
    const [collectionFolder, setCollectionFolder] = useState('front-end');

    const onBtnClick = (propName) => {
        setIsActive({...resetState, [propName]: true});
        setCollectionFolder(propName);
    }

    return (
        <div ref={educationRef} id="education" className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['header']}>
                    <h1>Education & Certification</h1>
                    <div className={styles['line']}></div>
                </div>
                <div className={styles['content-wrapper']}>
                    <CertificateContent collectionFolder={collectionFolder} />
                    <div className={styles['buttons']}>
                        <button
                            type='button'
                            onClick={() => onBtnClick('diplomas')}
                            className={isActive.diplomas ? styles['active'] : undefined}
                        >
                            Diplomas
                        </button>
                        <button
                            type='button'
                            onClick={() => onBtnClick('front-end')}
                            className={isActive['front-end'] ? styles['active'] : undefined}
                        >
                            Front-End
                        </button>
                        <button
                            type='button'
                            onClick={() => onBtnClick('back-end')}
                            className={isActive['back-end'] ? styles['active'] : undefined}
                        >
                            Back-End
                        </button>
                        <button
                            type='button'
                            onClick={() => onBtnClick('english')}
                            className={isActive.english ? styles['active'] : undefined}
                        >
                            English
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}