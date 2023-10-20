import styles from "./lyrics.module.css";

export default function Lyric({ lyrics }: { lyrics: string[] }) {
  return (
    <div className={styles["lines-container"]}>
      {lyrics.map((line, i) => {
        return <Line text={line} key={i} />;
      })}
    </div>
  );
}

function Line({ text }: { text: string }) {
  return text ? <div className={styles["line"]}>{text}</div> : <br />;
}
