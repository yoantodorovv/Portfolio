import styles from './TechStack.module.scss'

export const TechStack = ({
    techStackRef
}) => {
    return (
        <div ref={techStackRef} id="tech-stack" className={styles['wrapper']}>

        </div>
    );
}