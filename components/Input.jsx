import styles from "../styles/Input.module.css";

const Input = ({ handleInput }) => {
  return (
    <input
      className={styles.input}
      type="text"
      onKeyUp={handleInput}
      placeholder="Search using regular expressions"
      autoFocus={true}
    />
  );
};

export default Input;
