"use client";

import { api } from "@/convex/_generated/api";
import { useOrganization, useUser } from "@clerk/clerk-react";
import { usePaginatedQuery } from "convex/react";
import { Button } from "../ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function BaiTapFromUserOrg() {
  const { isSignedIn, user } = useUser();
  const { organization } = useOrganization();
  const { results, status, loadMore } = usePaginatedQuery(
    api.query.findBaiTap,
    {
      userId: user?.id,
      orgId: organization?.id,
    },
    { initialNumItems: 5 }
  );
  if (!isSignedIn || !organization || !user || !user.id || !organization.id) {
    return <div>Error!</div>;
  } else {
    return (
      <div>
        <div>
          {results.length != 0 ? (
            results?.map((baitap) => (
              <Link href={"/bai-tap/" + baitap.baiTapId}
                key={baitap._id}
                className="h-[70px] w-100 border-b border-x border-inherit bg-background flex items-center justify-between hover:bg-accent cursor-pointer text-xs px-6"
              >
                <div>
                  <div className="text-lg font-bold">{baitap.baitapTitle}</div>
                  <div>{baitap.baitapDescription}</div>
                </div>
                <div className="flex items-center flex-row">
                  {baitap.username}
                  <Button className="ms-2" variant={"outline"}>
                    <DotsVerticalIcon />
                  </Button>
                </div>
              </Link>
            ))
          ) : (
            <div className="h-[70px] w-100 border-b border-x border-inherit bg-background flex items-center justify-center text-xs px-6">
              Bạn chưa tạo bài tập nào cả.
            </div>
          )}
        </div>
        <div className="flex justify-center w-[100%]">
          {status === "CanLoadMore" ? (
            <Button
              onClick={() => loadMore(5)}
              className="my-2"
              variant={"outline"}
            >
              Tải thêm
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export function BaiTapFromOrg() {
  const { isSignedIn, user } = useUser();
  const { organization } = useOrganization();
  const { results, status, loadMore } = usePaginatedQuery(
    api.query.findBaiTapByOrg,
    {
      orgId: organization?.id,
    },
    { initialNumItems: 5 }
  );
  if (!isSignedIn || !organization || !user || !user.id || !organization.id) {
    return <div>Error!</div>;
  } else {
    return (
      <div>
        <div>
          {results.length != 0 ? (
            results?.map((baitap) => (
              <Link href={"/bai-tap/" + baitap.baiTapId}
                key={baitap._id}
                className="h-[70px] w-100 border-b border-x border-inherit bg-background flex items-center justify-between hover:bg-accent cursor-pointer text-xs px-6"
              >
                <div>
                  <div className="text-lg font-bold">{baitap.baitapTitle}</div>
                  <div>{baitap.baitapDescription}</div>
                </div>
                <div className="flex items-center flex-row">
                  {baitap.username}
                  {baitap.userId === user.id ? (
                    <Button className="ms-2" variant={"outline"}>
                      <DotsVerticalIcon />
                    </Button>
                  ) : (
                    <></>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="h-[70px] w-100 border-b border-x border-inherit bg-background flex items-center justify-center text-xs px-6">
              Không có bài tập nào trong tổ chức của bạn.
            </div>
          )}
        </div>
        <div className="flex justify-center w-[100%]">
          {status === "CanLoadMore" ? (
            <Button
              onClick={() => loadMore(5)}
              className="my-2"
              variant={"outline"}
            >
              Tải thêm
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
