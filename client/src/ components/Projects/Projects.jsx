import { Project } from './Project/Project';

import styles from './Projects.module.scss'

export const Projects = ({
    projectsRef
}) => {
    return (
        <div ref={projectsRef} className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['header']}>
                    <p>DISCOVER MY,</p>
                    <h1>Projects</h1>
                    <div className={styles['line']}></div>
                </div>
                <div className={styles['content']}>
                    <Project />
                </div>
            </div>
        </div>
    );
}