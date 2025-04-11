"use client";
import dynamic from "next/dynamic";
import NoformChatbot from "./Components/ChatBotApp";
import Footer from "./Components/Home Components/footer";
import Navbar from "./Components/Navbar";
const HomePage = dynamic(() => import("./homepage/page"), { ssr: false });

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
