"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { Examples } from "@/components/Examples";
import { Contribute } from "@/components/Contribute";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background" data-oid=":uc:u_6">
      <Header data-oid="wfw56.9" />
      <main data-oid="95yj4o1">
        <Hero data-oid="5rwjvwq" />
        <Overview data-oid="u8d0h-:" />
        <Features data-oid="66gcmmz" />
        <Installation data-oid="4.9-2yn" />
        <Examples data-oid="b-o60_i" />
        <Contribute data-oid=".tfl4pg" />
      </main>
      <Footer data-oid="cdxi44x" />
    </div>
  );
}
