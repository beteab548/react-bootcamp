import Link from "next/link";
import foodLogo from "@/assets/logo.png";
import classes from "@/components/header.module.css";
import Image from "next/image";
export default function Header() {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={foodLogo} alt="some food on a plate" priority={true} />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href={"/meals"}>meals</Link>
          </li>
          <li>
            <Link href={"/community"}>community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
