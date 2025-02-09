import Link from "next/link";
import NavBarAccount from "./NavBarAccount";
import NavbarButton from "./NavbarButton";
import ThemeChangeButton from "./ThemeChangeButton";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";

const rbtCon = Roboto_Condensed();

export default function Navbar() {
  return (
    <div className="flex items-center p-3 justify-around sticky top-0 left-0 shadow-sm px-0 lg:px-[30px] border border-input z-10 bg-background">
      <Link href="/">
        <Image src="/logo.svg" height={400} width={160} alt="" className=""></Image>
      </Link>
      <div className="md:flex hidden">
        {/* <NavbarButton>Giới thiệu</NavbarButton>
        <NavbarButton>Tra điểm</NavbarButton>
        <NavbarButton>Làm bài</NavbarButton>
        <NavbarButton>Tin nhắn</NavbarButton>
        <NavbarButton>Hướng dẫn sử dụng</NavbarButton> */}
        <NavBarAccount />
        {/* <ThemeChangeButton /> */}
      </div>
    </div>
  );
}
