import styles from "./lyrics.module.css";

export default function Lyric({ lyrics }: { lyrics: string[] }) {
  return (
    <div>
      {lyrics.map((line) => {
        return <Line text={line} />;
      })}
    </div>
  );
}

function Line({ text }: { text: string }) {
  return text == "" ? <br /> : <div className={styles["line"]}>{text}</div>;
}

