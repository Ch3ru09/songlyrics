import fs from "fs/promises";
import SongLinks from "./_components/SongLinks";

export default async function Home() {
  const songs = await getSongs();

  return (
    <>
      <h1>Choose song</h1>
      <main>
        {songs.map((song) => {
          return <SongLinks song={song} />;
        })}
      </main>
    </>
  );
}

async function getSongs() {
  return await fs.readdir(process.cwd() + "/src/app/_songs");
}

