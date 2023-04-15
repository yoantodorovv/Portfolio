import { useState, useEffect } from 'react';

import { storage } from '../../../services/firebase';
import { ref, getDownloadURL } from '@firebase/storage';

import styles from './About.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
    const [imageUrl, setImageUrl] = useState('');

    const imageRef = ref(storage, 'common/DSC_1205.jpg')

    useEffect(() => {
        getDownloadURL(imageRef)
            .then(url => {
                setImageUrl(url);
            })
            .catch(err => console.log(err))
    }, []);
    
    return (
        <div id='about' className={styles['wrapper']}>
            <div className={styles['content']}>
                <div className={styles['main-text']}>
                    <h2>Hi, my name is Yoan. It's great to meet you!</h2>
                    <p>
                        As a driven and enthusiastic junior web developer, with passion in the .NET and React fields, I am constantly expanding my knowledge and honing my skills in order to create innovative and user-friendly web applications. With a passion for AI that I plan to pursue in my university studies, I am committed to staying at the forefront of technology and pushing boundaries. Let's work together to bring your web development ideas to life!
                    </p>
                </div>
                <div className={styles['details-text']}>
                    <h3>Additional Information:</h3>
                    <div className={styles['element']}>
                        <FontAwesomeIcon className={styles['icon']} icon={faAngleRight} size="1x" />
                        <p>Years: {(new Date().getFullYear()) - 2004}</p>
                    </div>
                    <div className={styles['element']}>
                        <FontAwesomeIcon className={styles['icon']} icon={faAngleRight} size="1x" />
                        <p>Nationality: Bulgaria</p>
                        <div className={styles['flag']}>
                            <div className={styles['white']}></div>
                            <div className={styles['green']}></div>
                            <div className={styles['red']}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['image']}>
                <img src={imageUrl} />
            </div>
        </div>
    );
}