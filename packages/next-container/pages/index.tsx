import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const DashBoard = dynamic(() => import("../components/DashboardApp"), {
  ssr: false,
});

const Home: NextPage = () => {
  return <DashBoard />;
};

export default Home;
