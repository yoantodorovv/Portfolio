import { useEffect, useState } from 'react';

import { db } from '../../../../services/firebase';
import { getDoc, doc } from '@firebase/firestore';

import styles from './Card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
 
export const Card = ({
    field
}) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState(null);
    const [dbField, setDbField] = useState({});

    useEffect(() => {
        switch (field) {
            case 'front-end':
                setTitle('Front-End Stack');
                setIcon(faCode);
                break;
            case 'back-end':
                setTitle('Back-End Stack');
                setIcon(faServer);
                break;
            default:
                setTitle('Tools and Platforms');
                setIcon(faScrewdriverWrench);
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
                <FontAwesomeIcon className={styles['icon']} icon={icon} size="2x" />
                <h2>{title}</h2>
            </div>
            <div className={styles['line']}></div>
            <div className={styles['content']}>
                {dbField?.stack?.map(x => (
                    <div key={x} className={styles['element']}>
                        <p>{x}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}