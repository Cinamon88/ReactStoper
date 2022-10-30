import styles from './Container.module.scss';
import Button from '../Button/Button';
import {useEffect, useState} from 'react';
import Timer from '../Timer/Timer';

function Container () {
    const [start, setStart] = useState(false);
    const [stop, setStop] = useState(true);
    const [clock, setClock] = useState(0);

    useEffect (() => {
        let interval = null;

        if(start && stop === false) {
            interval = setInterval(() => {
                setClock((clock) => clock + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [start, stop]);

    const Start = () => {
        setStart(true);
        setStop(false);
    }

    const Stop = () => {
        setStart(false);
        setStop(true);
    }

    const Reset = () => {
        setStart(false);
        setClock(0);
    };

    return (
        <div className={styles.container}>
            <Timer time={clock} />
            <div className={styles.button}>
                <Button onClick={Start}>Start</Button>
                <Button onClick={Stop}>Stop</Button>
                <Button onClick={Reset}>Reset</Button>
            </div>
        </div>
    );
};

export default Container;