import { ArrowRightIcon } from "@radix-ui/react-icons";

interface LPBProps {
  children: React.ReactNode;
}

export default function LeftPartButton({ children }: LPBProps) {
  return (
    <div className="w-[100%] h-auto border-y border-input p-6 shadow-xs bg-background hover:bg-accent cursor-pointer flex flex-row justify-between items-center">
      {children}
      <ArrowRightIcon />
    </div>
  );
}
