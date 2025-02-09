import { BaiTapCreate } from "@/components/pages/BaiTapCreate";
import { BaiTapFromOrg, BaiTapFromUserOrg } from "@/components/pages/BaiTapRP";

export default function BaiTap() {
  return (
    <div className="min-h-screen w-[100%] p-6">
      <h1 className={"text-2xl font-black mb-2 "}>Bài tập của bạn đã tạo</h1>
      <hr></hr>
      <div className="w-[100%]">
        <BaiTapCreate />
        <BaiTapFromUserOrg />
      </div>
      <h1 className={"text-2xl font-black my-2 "}>Bài tập khác tạo trong tổ chức</h1>
      <hr></hr>
      <div className="w-[100%]">
        <BaiTapFromOrg />
      </div>
      {/* <Messages /> */}
    </div>
  );
}
