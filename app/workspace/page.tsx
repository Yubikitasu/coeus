"use client";

import { LatexRenderer } from "@/components/LatexRenderer";
import Messages from "@/components/pages/Messages";
import NavBarAccount from "@/components/pages/NavBarAccount";
import { ProfileForm } from "@/components/pages/testForm";
import { Label } from "@/components/ui/label";
import {
  ClerkLoaded,
  ClerkLoading,
  CreateOrganization,
  OrganizationList,
  OrganizationSwitcher,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  useOrganization,
  useUser,
} from "@clerk/nextjs";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TinNhan from "./tin-nhan";
import BaiTap from "./bai-tap";
import TraDiem from "./tra-diem";

export default function Workspace() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { organization } = useOrganization();
  const [pageState, setPageState] = useState("");

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }
  if (!organization || !isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <SignedIn>
          <Image src="/03.svg" width={400} height={400} alt=""></Image>
          <div className="font-bold text-center">
            Bắt đầu bằng việc chọn hoặc tạo tổ chức cho riêng bạn.
          </div>
          <div className="text-sm text-inherit text-center">
            Chưa biết làm gì? Đọc{" "}
            <Link href="/#" className="text-blue-500 underline">
              hướng dẫn sử dụng
            </Link>{" "}
            đi.
          </div>
          <OrganizationSwitcher hidePersonal />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    );
  }
  // return (
  //     <div className="flex flex-col items-center justify-center min-h-screen">
  //         <LatexRenderer latex="\int f(x) \ dx = x^2 + 3x - 2" id="sodifjsodifjosifj" />
  //         <SignedIn>
  //             <ClerkLoading>
  //             Loading...
  //             </ClerkLoading>
  //             <ClerkLoaded>
  //             <OrganizationSwitcher hidePersonal />
  //             <ProfileForm />
  //             <Messages />
  //             </ClerkLoaded>
  //         </SignedIn>
  //         <SignedOut>
  //             User is not signed in.
  //         </SignedOut>
  //         </div>
  // );
  return (
    <div
      className="grid grid-cols-[.30fr_.70fr] lg:grid-cols-[.25fr_.75fr] min-h-screen z-[0] relative"
      id="left-panel"
    >
      {/* //LEFT PART */}
      <div className="border-x hidden md:block border-input shadow-sm flex-row w-100">
        <ClerkLoading>Loading...</ClerkLoading>
        <ClerkLoaded>
          <div className="w-[100%] h-auto border-y border-input p-6 shadow-sm">
            <div>
              <Image
                src="/10815583.jpg"
                className="rounded-lg mb-6"
                width={1000}
                height={100}
                alt=""
              ></Image>
            </div>
            <div className="text-center">
              <span className="font-bold">Xin chào {user?.fullName}!</span>{" "}
              <br></br>
              <span className="text-sm">Hôm nay bạn sẽ làm gì?</span>
            </div>
          </div>
          <div className="w-[100%] h-auto border-y border-input p-6 shadow-sm">
            <div>
              <Label>Tổ chức của bạn</Label>
            </div>
            <div>
              <OrganizationSwitcher hidePersonal />
            </div>
          </div>
          <div
            className="w-[100%] h-auto border-y border-input p-6 shadow-sm bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center"
            onClick={() => {
              setPageState("tin-nhan");
            }}
          >
            Tin nhắn
            <ArrowRightIcon />
          </div>
          <div
            className="w-[100%] h-auto border-y border-input p-6 shadow-sm bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center"
            onClick={() => {
              setPageState("bai-tap");
            }}
          >
            Bài tập
            <ArrowRightIcon />
          </div>
          <div
            className="w-[100%] h-auto border-y border-input p-6 shadow-sm bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center"
            onClick={() => {
              setPageState("tra-diem");
            }}
          >
            Tra điểm
            <ArrowRightIcon />
          </div>
          <div
            className="w-[100%] h-auto border-y border-input p-6 shadow-sm bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center"
            onClick={() => {
              setPageState("");
            }}
          >
            Hướng dẫn sử dụng
            <ArrowRightIcon />
          </div>
          {/* <ProfileForm />
          <Messages /> */}
        </ClerkLoaded>
      </div>
      <div>
        {pageState === "tin-nhan" ? (
          <TinNhan />
        ) : pageState === "bai-tap" ? (
          <BaiTap />
        ) : pageState === "tra-diem" ? (
          <TraDiem />
        ) : pageState === "" ? (
          <></>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
