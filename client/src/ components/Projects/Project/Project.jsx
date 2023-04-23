import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Project.module.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Project = ({
    project
}) => {

    const handleOnImageClick = () => {
        window.open(project.referLinks.online, '_blank');
    }

    return (
        <div className={styles['project']}>
            <img onClick={handleOnImageClick} src={project.imageUrl} />
            <div className={styles['text']}>
                <h2>{project.name}</h2>
                <p>{project.year}</p>
                <p>{project.description}</p>
                <p className={styles['tech-stack']}>{project.techStack.map(x => <span key={x} className={styles['tech-stack-element']}>{x}</span>)}</p>
                <div className={styles['refer']}>
                    <a href={project.referLinks.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href={project.referLinks.online} target="_blank">
                        <FontAwesomeIcon icon={faUpRightFromSquare} size="xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}