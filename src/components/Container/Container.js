import styles from './Container.module.scss';
import Button from '../Button/Button';

function Container () {
    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <Button>Start</Button>
                <Button>Stop</Button>
                <Button>Reset</Button>
            </div>
        </div>
    );
};

export default Container;