import Image from "next/image";
import localFont from "next/font/local";
import Treatements from "@/HomeComponent/Treatment";
import { Rewards } from "@/HomeComponent/Reward";
import Head from "next/head";
import HeadTop from "@/HomeComponent/HeadTop";
import Faq from "@/HomeComponent/Faq";
import Contact from "@/HomeComponent/Contact";
import About from "@/HomeComponent/About";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      // className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
    {/* Index page */}
    {/* <Head/> */}
    <HeadTop/>
    <Treatements/>
    <About/>
    <Rewards/>
    <Contact/>
    <Faq/>
    </div>
  );
}
