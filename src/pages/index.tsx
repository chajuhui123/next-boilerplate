import Link from "next/link";

const IndexPage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <p>
      <Link href="/test">
        <a>Test</a>
      </Link>
    </p>
    <p>
      <Link href="/scroll">
        <a>Scroll Test</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
