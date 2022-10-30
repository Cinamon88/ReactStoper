import styles from "./Timer.module.scss";

const Timer = (props) => {
  return (
    <div className={styles.timer}>
      <span className="digits hours">
        {("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}:
      </span>
      <span className="digits minutes">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits seconds">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="digits mili-sec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
};
export default Timer;