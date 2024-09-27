import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>HOME!</div>
      <br />
      <Link href="/posts">Posts</Link>
      <br />
      <Link href="/albums">Albums</Link>
    </>
  );
}
