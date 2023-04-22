import styles from './Contact.module.scss'

export const Contact = ({
    contactRef
}) => {
    return (
        <div ref={contactRef} className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['header']}>
                    <h1>Contact Me</h1>
                    <div className={styles['line']}></div>
                </div>
                <div className={styles['content']}>
                    <p>Whether you have a question about my work, want to discuss a potential project, or just want to say hello, I'm always happy to hear from fellow developers and potential collaborators.</p>
                    <p>Thank you for taking the time to visit my portfolio. I look forward to hearing from you soon!</p>
                    <a href="mailto:todorovyoan075@gmail.com" target='_blank'>Contact Me</a>
                </div>
            </div>
        </div>
    );
}