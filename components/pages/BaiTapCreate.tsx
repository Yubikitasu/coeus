"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { BaiTapForm } from "./testForm";

export function BaiTapCreate() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-[70px] w-100 border-b border-x border-inherit bg-background flex justify-center items-center hover:bg-accent cursor-pointer text-xs">
          <PlusIcon />
          <span className="ms-2">Tạo bài tập</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tạo một bài tập mới</DialogTitle>
          <DialogDescription>
            Bạn hãy tạo một bài tập mới, rồi sau đó bạn có thể chỉnh sửa đề bài,
            thêm câu hỏi, và thêm câu trả lời.
          </DialogDescription>
          <BaiTapForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
