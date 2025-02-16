"use client";

import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface BTBProps {
  btbKey: Id<"baitap">;
}

export default function BaiTapButtons({ btbKey }: BTBProps) {
  const mutation = useMutation(api.mutations.deleteBaiTap);
  function handleDelete() {
    mutation({ id: btbKey });
  }
  return (
    <DropdownMenu key={btbKey}>
      <DropdownMenuTrigger asChild>
        <Button className="ms-2 z-2" variant={"outline"}>
          <DotsVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={(e) => {
            handleDelete();
            e.preventDefault();
          }}
        >
          Xoá bỏ
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
