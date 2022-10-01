import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components";
import Features from "../components/Features";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <title>
        Reactra - A React framework for building scalable and maintainable UI
        apps
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Head>
        <link sizes="180x180" href="/static/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/site.webmanifest" />
      </Head>
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </>
  );
};

export default Home;
