import styles from './Container.module.scss';
import Button from '../Button/Button';
import {useState} from 'react';

function Container () {
    const [start, setStart] = useState(false);
    const [stop, setStop] = useState(true);
    const [clock, setClock] = useState(0);

    

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