import { ProfileForm } from "@/components/pages/testForm";
import { SignInButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <>
      <SignInButton />
      <ProfileForm />
    </>
  );
}
