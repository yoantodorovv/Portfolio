import { Carousel } from './Carousel/Carousel';
import styles from './CertificateContent.module.scss'

export const CertificateContent = ({
    certificates
}) => {
    return (
        <div className={styles['content']}>
            <div className={styles['carousel']}>
                <Carousel certificates={certificates} />
            </div>
            <div className={styles['line']}></div>
            <div className={styles['certificate-information']}>
                <h2>Name</h2>
                <p>Issued By: ...</p>
                <p>Issued On: ...</p>
                <p>Grade: 6.00</p>
            </div>
        </div>
    );
}