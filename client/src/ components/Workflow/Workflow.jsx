import styles from './Workflow.module.scss'

export const Workflow = ({
    workflowRef
}) => {
    return (
        <div ref={workflowRef} className={styles['wrapper']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['header']}>
                    <p>DISCOVER MY,</p>
                    <h1>Workflow</h1>
                    <div className={styles['line']}></div>
                </div>
                <div className={styles['content']}>
                    
                </div>
            </div>
        </div>
    );
}