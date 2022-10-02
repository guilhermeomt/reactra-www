import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { Meta } from "../components/Meta";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </>
  );
};

export default Home;
