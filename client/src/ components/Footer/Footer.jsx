import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import * as constants from '../../../public/constants/Footer'

export const Footer = () => {
    return (
        <div>
            <div className={styles['socials']}>
                <ul>
                    <li>
                        <a href={constants.LINKED_IN_URL} target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                        </a>
                    </li>
                    <li>
                        <a href={constants.GITHUB_URL} target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="xl" />
                        </a>
                    </li>
                    <li>
                        <a href={constants.INSTAGRAM_URL} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles['wrapper']} onClick={() => onLinkClick(constants.GITHUB_REPO_URL)}>
                <p>Designed & Built by Yoan Todorov</p>
            </div>
        </div>
    );
}