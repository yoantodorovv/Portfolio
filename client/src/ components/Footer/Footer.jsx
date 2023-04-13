import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 

import * as constants from '../../../public/constants/Footer'

export const Footer = () => {

    const onLinkClick = (url) => {
        console.log(url);

        window.open(url, "_blank");
    }

    return (
        <div>
            <div className={styles['socials']}>
                <ul>
                    <li
                        onClick={() => onLinkClick(constants.LINKED_IN_URL)}
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                    </li>
                    <li
                        onClick={() => onLinkClick(constants.GITHUB_URL)}
                    >
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </li>
                    <li
                        onClick={() => onLinkClick(constants.INSTAGRAM_URL)}
                    >
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </li>
                </ul>
            </div>
            <div className={styles['wrapper']} onClick={() => onLinkClick(constants.GITHUB_REPO_URL)}>
                <p>Designed & Built by Yoan Todorov</p>
            </div>
        </div>
    );
}