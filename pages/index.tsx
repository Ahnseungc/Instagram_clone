import Head from "next/head";

import TabBar from "../components/TabBar";

import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram CLone</title>
        <meta
          name="description"
          content="Simple Instagram Clone using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
      <TabBar />
    </div>
  );
};

export default Index;
