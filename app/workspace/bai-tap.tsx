import { BaiTapCreate } from "@/components/pages/BaiTapCreate";
import Messages from "@/components/pages/Messages";
import { ProfileForm } from "@/components/pages/testForm";
import { PlusIcon } from "@radix-ui/react-icons";

export default function BaiTap() {
  return (
    <div className="min-h-screen w-[100%] p-6">
      <h1 className="text-2xl font-semibold mb-2">Bài tập của bạn đã tạo</h1>
      <hr></hr>
      <div className="grid grid-cols-6 w-[100%] my-2">
        <BaiTapCreate />
      </div>
      {/* <Messages /> */}
    </div>
  );
}
