import styles from'./Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <button className={styles.button}>Start</button>
            <button className={styles.button}>Stop</button>
            <button className={styles.button}>Reset</button>
        </div>
    );
};


export default Hero;