import Link from "next/link";
import stiles from "../styles/A.module.css";

export default function A({ text, href }) {
  return (
    <Link href={href}>
      <a className={stiles.link}>{text}</a>
    </Link>
  );
}
