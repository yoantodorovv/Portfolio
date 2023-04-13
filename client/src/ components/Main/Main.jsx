import styles from './Main.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

export const Main = () => {
    return (
        <div id='main' className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <p className={`${styles['sub-heading']} ${styles['highlight']}`}>A JUNIOR,</p>
                <h1>Full-Stack Web Developer</h1>
                <p className={styles['aim']}>
                    I strive to create beautifully designed and intuitive software that solves real-world problems. With a passion for elegant and simple solutions, I am dedicated to crafting high-quality code that delivers exceptional user experiences.
                </p>
                <a
                    href='#contact'
                >
                    Contact Me
                </a>
            </div>
            <a href="#about"><FontAwesomeIcon className={styles['arrow']} icon={faArrowDownLong} size="2x"/></a>
        </div>
    );
}