'use client'

import LandingPage from "@/components/pages/LandingPage";
import Navbar from "@/components/pages/NavBar";
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn }  = useUser();
  const router = useRouter();
  useEffect(() => { 
    if (isSignedIn) {
      router.push("/workspace");
    } else {
      router.push("/");
    }
  }, [isSignedIn, router])
  return (
    <>
    <Navbar />
    <LandingPage/>
    </>
  );
}
