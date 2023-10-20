import fs from "fs/promises";
import path from "path";

import Lyric from "./Lyric";
import styles from "./lyrics.module.css";

export default async function SongPage({
  params,
}: {
  params: { song: string };
}) {
  const song = decodeURI(params.song);

  const [original, romanized, translation] = await Promise.all(
    ["original", "romanized", "translation"].map(async (version) =>
      (
        await fs.readFile(
          path.join(process.cwd(), "src/app/_songs/", song, version + ".txt")
        )
      )
        .toString()
        .split("\n")
    )
  );

  return (
    <>
      <h1>{song}</h1>
      <div id="container" className={styles["container"]}>
        <Lyric lyrics={original} />
        <Lyric lyrics={romanized} />
        <Lyric lyrics={translation} />
      </div>
    </>
  );
}

