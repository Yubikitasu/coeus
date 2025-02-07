import { ProfileForm } from "@/components/pages/testForm";
import { SignInButton } from "@clerk/nextjs";
import localFont from "next/font/local";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <ProfileForm />
    </>
  );
}
