import Head from "next/head";

export default function Header(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        name="description"
        content="One stop shop for all your sustainability needs"
      />
      <link rel="icon" href="/favicon.ico" />s
    </Head>
  );
}
