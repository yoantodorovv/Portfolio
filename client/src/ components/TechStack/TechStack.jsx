import { Card } from './Card/Card';

import styles from './TechStack.module.scss'

export const TechStack = ({
    techStackRef
}) => {
    return (
        <div ref={techStackRef} id="tech-stack" className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['header']}>
                    <h1>My Tech Stack</h1>
                    <div className={styles['line']}></div>
                </div>
                <div className={styles['content']}>
                    <Card field={'front-end'} />
                    <Card field={'back-end'} />
                    <Card field={'platforms'} />
                </div>
            </div>
        </div>
    );
}