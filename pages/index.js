import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Link href="/resume">Resume</Link>
    </div>
  );
}
export default Home;
