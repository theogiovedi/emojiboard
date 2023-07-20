import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Results from "../components/Results";
import Credits from "../components/Credits";

const emojis = await fetch("/emojis.json")
  .then((emojisFile) => emojisFile.json())
  .catch(() =>
    console.log("Error: Emojiboard could not load the emojis.json file")
  );

export default function Home() {
  const [results, setResults] = useState("");
  const [size, setSize] = useState("");
  
  function handleInput(e) {
    if (e.target.value === "") {
      setResults("");
      setSize("");
    } else {
      try {
        let re = new RegExp(e.target.value, "i");
        let results = emojis.filter((item) => re.test(item[0]) || re.test(item[1]) || re.test(item[2]));
        setResults(results);
        if (results.length === 0) {
          setSize("");
        } else if (results.length === 1) {
          setSize("1 result");
        } else if (results.length >= 100) {
          setSize("≥ 100 results");
        } else {
          setSize(`${results.length} results`);
        }
      } catch (e) {
        setResults("");
        setSize("");
      }
    }
  }

  const [emoji, setEmoji] = useState("");
  
  function getEmoji() {
    try {
      setEmoji(emojis[Math.floor(emojis.length * Math.random())][0]);
    } catch (e) {
      console.log("Error: Emojiboard could not get random emoji");
    }
  }

  useEffect(() => {
    getEmoji();
    setInterval(() => {
      getEmoji();
    }, 1500);
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Emojiboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.emoji}>{emoji}</span>
          Emojiboard
        </h1>
        <Input handleInput={handleInput} />
        <Results results={results} />
        <div className={styles.size}>
          {size}
        </div>
      </main>

      <footer className={styles.footer}>
        <Credits />
      </footer>
    </div>
  );
}
