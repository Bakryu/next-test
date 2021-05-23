import Head from "next/head";
import A from "./A";

export default function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={`shop user ${keywords}`}></meta>
      </Head>
      <div className="navbar">
        <A text={"Main"} href={"/"} />
        <A text={"Users"} href={"/users"} />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
}
