const { default: Link } = require("next/link");

function Navbar() {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/resume">Resume</Link>
    </div>
  );
}

export default Navbar;
