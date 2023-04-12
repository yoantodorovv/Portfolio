import { useState } from 'react';
import styles from './Navigation.module.scss'

export const Navigation = () => {
    const initialState = {
        main: false,
        about: false,
        education: false,
        techStack: false,
        workflow: false,
        contact: false,
    };

    const [isActive, setIsActive] = useState(initialState);

    const handleNavClick = (propName) => setIsActive({...initialState, [propName]: true});

    return (
        <div className={styles['wrapper']}>
            <div className={styles['logo']}>
                <a 
                    onClick={() => handleNavClick('main')}
                    href='#main'
                >
                    Yoan Todorov
                </a>
            </div>
            <nav className={styles['nav']}>
                <ul>
                    <li>
                        <a
                            onClick={() => handleNavClick('about')}
                            className={isActive.about ? styles['active'] : undefined}
                            href='#about'>
                                <span className={styles['highlight']}>
                                    0.
                                </span>
                                About
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleNavClick('education')}
                            className={isActive.education ? styles['active'] : undefined}
                            href='#education'>
                                <span className={styles['highlight']}>
                                    1.
                                </span>
                                Education
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleNavClick('techStack')}
                            className={isActive.techStack ? styles['active'] : undefined}
                            href='#tech-stack'>
                                <span className={styles['highlight']}>
                                    2.
                                </span>
                                Tech Stack
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleNavClick('workflow')}
                            className={isActive.workflow ? styles['active'] : undefined}
                            href='#workflow'>
                                <span className={styles['highlight']}>
                                    3.
                                </span>
                                Workflow
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => handleNavClick('contact')}
                            className={isActive.contact ? styles['active'] : undefined}
                            href='#contact'>
                                <span className={styles['highlight']}>
                                    4.
                                </span>
                                Contact
                        </a>
                    </li>
                    <li>
                        <button
                            type='button'
                        >
                            Resume
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}