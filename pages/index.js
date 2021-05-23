import Link from "next/link";
import A from "../components/A";
export default function Index() {
  return (
    <div>
      <div className="navbar">
        <A text={"Main"} href={"/"} />
        <A text={"Users"} href={"/users"} />
      </div>
      <h1>Main</h1>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        
        `}
      </style>
    </div>
  );
}
