import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Project.module.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Project = ({
    project
}) => {
    return (
        <div className={styles['project']}>
            <img src="" />
            <div className={styles['text']}>
                <h2>GoldenGlow</h2>
                <p>2023</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nesciunt est laborum praesentium mollitia facilis expedita suscipit incidunt, reiciendis voluptatum repellendus molestias odit quia sunt cum nisi eveniet ad
                    iure.
                </p>
                <p>tech-stack</p>
                <div className={styles['refer']}>
                    <a href="" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="" target="_blank">
                        <FontAwesomeIcon icon={faUpRightFromSquare} size="xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}