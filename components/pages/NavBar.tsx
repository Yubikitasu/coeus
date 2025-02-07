import NavBarAccount from "./NavBarAccount";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <div className="flex items-center p-3 justify-around sticky top-0 left-0 shadow-sm px-0 lg:px-[30px] border border-input">
      <div className="font-extrabold">Coeus</div>
      <div className="md:flex hidden">
        <NavbarButton>Giới thiệu</NavbarButton>
        <NavbarButton>Tra điểm</NavbarButton>
        <NavbarButton>Làm bài</NavbarButton>
        <NavbarButton>Tin nhắn</NavbarButton>
        <NavbarButton>Hướng dẫn sử dụng</NavbarButton>
        <NavBarAccount />
      </div>
    </div>
  );
}
