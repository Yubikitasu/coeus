import RenderCauHoi from "@/components/pages/CauHoi";
import CauHoiFormTN from "@/components/pages/CauHoiFormTN";

export default async function Page({
  params,
}: {
  params: Promise<{ btId: string }>;
}) {
  const btId = (await params).btId;
  return (
    <div className="flex flex-col items-center min-h-screen form p-6 space-y-2" id={btId}>
      <CauHoiFormTN btId={btId} />
      <RenderCauHoi baiTapId={btId}></RenderCauHoi>
    </div>
  );
}
