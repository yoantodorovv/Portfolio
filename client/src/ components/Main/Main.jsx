import styles from './Main.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

export const Main = ({
    mainRef,
    scrollToRef
}) => {
    const handleArrowClick = (page) => {
        scrollToRef(page);
    }

    return (
        <div ref={mainRef} id='main' className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <p className={`${styles['sub-heading']} ${styles['highlight']}`}>A JUNIOR,</p>
                <h1>Full-Stack Web Developer</h1>
                <p className={styles['aim']}>
                    I strive to create beautifully designed and intuitive software that solves real-world problems. With a passion for elegant and simple solutions, I am dedicated to crafting high-quality code that delivers exceptional user experiences.
                </p>
                <p className={styles['work-status']}>
                    Work Status: <span>Unemployed</span> (Actively Applying)
                </p>
                <a
                    onClick={() => handleArrowClick('contact')}
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}