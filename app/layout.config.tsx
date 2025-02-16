import { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import Link from "next/link";

export const baseOptions: BaseLayoutProps = {
  nav: {
    children: (
      <Link href="/">
        <Image
          src="/logo.svg"
          height={80}
          width={120}
          alt=""
          className=""
        ></Image>
      </Link>
    ),
  },
};
