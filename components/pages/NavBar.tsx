import Link from "next/link";
import NavBarAccount from "./NavBarAccount";
import NavbarButton from "./NavbarButton";
import ThemeChangeButton from "./ThemeChangeButton";
import { Roboto_Condensed } from "next/font/google";

const rbtCon = Roboto_Condensed();

export default function Navbar() {
  return (
    <div className="flex items-center p-3 justify-around sticky top-0 left-0 shadow-sm px-0 lg:px-[30px] border border-input z-10 bg-background">
      <Link href="/" className={`${rbtCon.className} font-black text-xl decoration-transparent`}>COEUS</Link>
      <div className="md:flex hidden">
        <NavbarButton>Giới thiệu</NavbarButton>
        <NavbarButton>Tra điểm</NavbarButton>
        <NavbarButton>Làm bài</NavbarButton>
        <NavbarButton>Tin nhắn</NavbarButton>
        <NavbarButton>Hướng dẫn sử dụng</NavbarButton>
        <NavBarAccount />
        {/* <ThemeChangeButton /> */}
      </div>
    </div>
  );
}
