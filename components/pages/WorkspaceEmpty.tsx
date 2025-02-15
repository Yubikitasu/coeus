"use client";

import { useUser } from "@clerk/clerk-react";
import Image from "next/image";

export default function WorkspaceEmpty() {
  const { user } = useUser();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-[100%] p-6 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]">
      <Image src="/05.svg" height={300} width={300} alt=""></Image>
      <h1 className="text-xl font-black text-center">
        Chào mừng {user?.fullName} đã đến với Coeus!
      </h1>
      <p className="text-sm text-center">
        Bạn có thể tiếp tục bằng việc chọn Tin nhắn, Bài tập, Tra điểm, Hướng
        dẫn sử dụng.
      </p>
    </div>
  );
}
