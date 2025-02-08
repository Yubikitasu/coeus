'use client'

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      Welcome to Coeus!
    </div>
  );
}
