"use client";

import Navbar from "@/components/pages/NavBar";
import WorkspaceEmpty from "@/components/pages/WorkspaceEmpty";
import { Label } from "@/components/ui/label";
import {
  ClerkLoaded,
  ClerkLoading,
  OrganizationSwitcher,
  SignedIn,
  useOrganization,
  useUser
} from "@clerk/nextjs";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BaiTap from "./bai-tap";
import TinNhan from "./tin-nhan";
import TraDiem from "./tra-diem";

export default function Workspace() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { organization } = useOrganization();
  const [pageState, setPageState] = useState("");
  const router = useRouter();

  useEffect(() => { 
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }
  if (!organization || !isSignedIn) {
    return (
      <>
        <Navbar />
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
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 w-[100%] md:grid-cols-[.30fr_.70fr] lg:grid-cols-[.25fr_.75fr] min-h-screen z-0 relative">
        {/* //LEFT PART */}
        <div
          className="border-x hidden md:block border-input shadow-xs flex-row w-[100%]"
          id="left-panel"
        >
          <ClerkLoading>Loading...</ClerkLoading>
          <ClerkLoaded>
            <div className="w-[100%] h-auto border-y border-input p-6 shadow-xs">
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
            <div className="w-[100%] h-auto border-y border-input p-6 shadow-xs">
              <div>
                <Label>Tổ chức của bạn</Label>
              </div>
              <div>
                <OrganizationSwitcher hidePersonal />
              </div>
            </div>
            <div
              className="w-[100%] h-auto border-y border-input p-6 shadow-xs bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center"
              onClick={() => {
                setPageState("tin-nhan");
              }}
            >
              Tin nhắn
              <ArrowRightIcon />
            </div>
            <div
              className="w-[100%] h-auto border-y border-input p-6 shadow-xs bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center"
              onClick={() => {
                setPageState("bai-tap");
              }}
            >
              Bài tập
              <ArrowRightIcon />
            </div>
            <div
              className="w-[100%] h-auto border-y border-input p-6 shadow-xs bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center"
              onClick={() => {
                setPageState("tra-diem");
              }}
            >
              Tra điểm
              <ArrowRightIcon />
            </div>
            <Link href="/docs">
              <div className="w-[100%] h-auto border-y border-input p-6 shadow-xs bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center">
                Hướng dẫn sử dụng
                <ArrowRightIcon />
              </div>
            </Link>
            {/* <ProfileForm />
          <Messages /> */}
          </ClerkLoaded>
        </div>
        <div id="right-panel">
          {pageState === "tin-nhan" ? (
            <TinNhan />
          ) : pageState === "bai-tap" ? (
            <BaiTap />
          ) : pageState === "tra-diem" ? (
            <TraDiem />
          ) : pageState === "" ? (
            <WorkspaceEmpty />
          ) : (
            <WorkspaceEmpty />
          )}
        </div>
      </div>
    </>
  );
}
