import Link from "next/link";
import { memo } from "react";

const Header = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </li>
    </ul>
  )
};

export default memo(Header);
