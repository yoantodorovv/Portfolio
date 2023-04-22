import { useEffect, useState } from 'react';

import { db } from '../../../services/firebase';
import { collection, getDocs } from 'firebase/firestore'

import { Project } from './Project/Project';

import styles from './Projects.module.scss'

export const Projects = ({
    projectsRef
}) => {
    const [projects, setProjects] = useState();
    const projectsCollectionRef = collection(db, 'projects');

    useEffect(() => {
        getDocs(projectsCollectionRef)
            .then(data => setProjects(data.docs.map(x => x.data())))
            .catch(err => console.log(err));
    }, []);

    return (
        <div ref={projectsRef} className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['header']}>
                    <p>DISCOVER MY,</p>
                    <h1>Projects</h1>
                    <div className={styles['line']}></div>
                </div>
                <div className={styles['content']}>
                    {projects?.map(x => <Project key={x.name} project={x} />)}
                </div>
            </div>
        </div>
    );
}