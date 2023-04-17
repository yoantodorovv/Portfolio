import { useEffect, useState } from 'react';

import { db } from '../../../../services/firebase';
import { getDoc, doc } from '@firebase/firestore';

import styles from './Card.module.scss'

export const Card = ({
    field
}) => {
    const [title, setTitle] = useState('');
    const [dbField, setDbField] = useState({});

    useEffect(() => {
        switch (field) {
            case 'front-end':
                setTitle('Front-End Stack');
                break;
            case 'back-end':
                setTitle('Back-End Stack');
                break;
            default:
                setTitle('Tools and Platforms');
                break;
        }
        
        const fieldRef = doc(db, 'tech-stack', field);

        getDoc(fieldRef)
            .then(res => setDbField(res.data()))
            .catch(err => console.log(err))
    }, []);
    return (
        <div className={styles['wrapper']}>
            <div className={styles['heading']}>
                <h2>{title}</h2>
            </div>
            <div className={styles['line']}></div>
            <div className={styles['content']}>
                {dbField?.stack?.map(x => (
                    <div className={styles['element']}>
                        <p>{x}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}