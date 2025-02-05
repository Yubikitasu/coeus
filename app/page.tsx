import Alert from "@/components/pages/Alert";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <Alert title="Bạn có thực sự muốn làm điều này?" description="Nếu bạn làm điều này, chúng tôi sẽ biến bạn thành một món súp.">
        <Button variant={"destructive"}>Nhấp vào đây!</Button>
      </Alert>
    </div>
  );
}
