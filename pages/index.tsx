import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <>
    <h2>როუთები:</h2>
    <NextLink href="/home"> მთავარი </NextLink>
    <br/>
    <hr/>
    <NextLink href="/signin"> შესვლა </NextLink>
    <br/>
    <hr/>
    <NextLink href="/register"> რეგისტრაცია </NextLink>
    <br/>
    <hr/>
    <NextLink href="/diaries"> დღიურები </NextLink>
    <br/>
    <hr/>
    <NextLink href="/creatediary"> დღიურის შექმნა </NextLink>
    <br/>
    <hr/>
    <NextLink href="/diary/61c8701972830d1143283730"> ცალკეული დღიური აიდის მიხედვით და კომენტარი </NextLink>
    <br/>
    <hr/>
    <NextLink href="/growers"> გროუერები </NextLink>
    <br/>
    <hr/>
    <NextLink href="/grower/luka"> ცალკეული გროუერი იუზერნეიმის მიხედვით </NextLink>
    <br/>
    <hr/>
    


    </>
  );
};
export default Home;
