import Alert from "@/components/pages/Alert";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Script from "next/script";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <>
      Xin chào :D
    </>
  );
}
