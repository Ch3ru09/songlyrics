import Link from "next/link";

export default function SongLinks({ song }: { song: string }) {
  return <Link href={"/song/" + song}>{song}</Link>;
}

