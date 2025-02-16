"use client";

import { useGSAP } from "@gsap/react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import NavBarMobileAccount from "./NavbarMobileAccount";

export default function MobileHamburger() {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  const [state, setState] = useState(false);
  const { contextSafe } = useGSAP({ scope: container });
  const onClickGood = contextSafe(() => {
    if (state == true) {
      setState(false);
      gsap.to(".good", { opacity: 0, height: 0 });
      gsap.to(".good", {translateY: -100 + "vh", ease: "sine"});
    }
    if (state == false) {
      setState(true);
      gsap.to(".good", { opacity: 100, height: 100 + "vh" });
      gsap.to(".good", {translateY: 0 + "vh", ease: "sine"});
    }
  });
  return (
    <div ref={container}>
      <Button
        variant="outline"
        className="absolute right-15 top-2 z-20"
        onClick={onClickGood}
      >
        <HamburgerMenuIcon />
      </Button>
      <div className="absolute left-0 top-0 w-[100%] bg-background opacity-0 z-[3] p-12 pt-20 translate-y-[-100vh] border-b-4 border-b-input good">
        <div className="good opacity-0 overflow-clip">
          <NavBarMobileAccount />
        </div>
      </div>
    </div>
  );
}
