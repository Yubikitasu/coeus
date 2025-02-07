import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export default function NavBarAccount() {
  return (
    <>
      <SignedIn>
        <ClerkLoading>
          <Skeleton className="h-9 w-9 p-4" />
        </ClerkLoading>
        <ClerkLoaded>
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:text-accent-foreground h-9 p-4">
            <UserButton />
          </div>
        </ClerkLoaded>
      </SignedIn>
      <SignedOut>
        <ClerkLoading>
          <Skeleton className="h-9 w-9 p-4" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignInButton mode="modal">
            <Button variant={"outline"} className="mx-3">
              Đăng nhập
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="mx-3">Đăng ký</Button>
          </SignUpButton>
        </ClerkLoaded>
      </SignedOut>
    </>
  );
}
