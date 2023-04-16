import { useState } from 'react';

import styles from './Education.module.scss'
import { CertificateContent } from './CertificateContent/CertificateContent';

export const Education = () => {
    const falsyState = {
        'front-end': false,
        'back-end': false,
        english: false,
    }
    const [isActive, setIsActive] = useState({
        'front-end': true,
        'back-end': false,
        english: false,
    });

    const onBtnClick = (propName) => setIsActive({...falsyState, [propName]: true});

    return (
        <div id="education" className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['header']}>
                    <h1>Education & Certification</h1>
                    <div className={styles['line']}></div>
                </div>
                <div className={styles['content-wrapper']}>
                    <CertificateContent />
                    <div className={styles['buttons']}>
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