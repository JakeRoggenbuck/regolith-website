"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { Examples } from "@/components/Examples";
import { Contribute } from "@/components/Contribute";
import { Footer } from "@/components/Footer";

export default function Page() {
  // Set dark mode as default on page load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background" data-oid=":uc:u_6">
      <Header data-oid="fvm33sm" />
      <main data-oid="yke_u8n">
        <Hero data-oid="q-2c_78" />
        <Overview data-oid="zr65qmj" />
        <Features data-oid="px8r9pj" />
        <Installation data-oid="n339arz" />
        <Examples data-oid=".7r3i44" />
        <Contribute data-oid=":21-atf" />
      </main>
      <Footer data-oid="3u0o9:z" />
    </div>
  );
}
