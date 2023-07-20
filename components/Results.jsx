import styles from "../styles/Results.module.css";

const Results = ({ results }) => {
  function handleClick(e) {
    navigator.clipboard.writeText(e.target.id).then(() => {
      e.target.innerText = "Copied!";
    });
  }

  let items = [];
  if (results) {
    //items = results.map((items) =>
    //    <li key={items[1]} className={styles.item}>
    //      <span className={styles.left}>
    //        <span className={styles.emoji}>{items[0]}</span>
    //        <span className={styles.name}>{items[1]}</span>
    //      </span>
    //      <button id={items[0]} className={styles.copy} onClick={handleClick}>Copy</button>
    //    </li>
    //);

    for (let i = 0; i < 100 && i < results.length; i++) {
      items.push(
        <li key={results[i][1]} className={styles.item}>
          <span className={styles.left}>
            <span className={styles.emoji}>{results[i][0]}</span>
            <span className={styles.name}>{results[i][1]}</span>
          </span>
          <button id={results[i][0]} className={styles.copy} onClick={handleClick}>Copy</button>
        </li>
      );
    }
  }

  return (
    <ul className={styles.list}>
      {items}
    </ul>
  );
};

export default Results;
