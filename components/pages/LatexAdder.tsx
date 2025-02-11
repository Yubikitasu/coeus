"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LatexRenderer } from "../LatexRenderer";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import tSTL from "@/lib/toStringToLatex";

export default function LatexAdder() {
  const latexData = [
    "\\sqrt{a}",
    "\\int_{a}^{b} f(x) \\ dx",
    "\\int f(x) \\ dx",
    "\\dfrac{a}{b}",
    "{x}^{a}",
    "f \\left ( x \\right )",
    "\\sqrt{x^2 + y^2}",
    "\\overrightarrow{AB}",
  ];
  let [value, setValue] = useState("");
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          Viết phương trình bằng
          <LatexRenderer latex="\LaTeX" id="latex-button"></LatexRenderer>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">
            Viết phương trình bằng{" "}
            <LatexRenderer latex="\LaTeX" id="latex-title2"></LatexRenderer>
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col w-[100%] min-h-[400px] max-h-[100vh] items-center p-6 overflow-y-scroll">
          <div className="flex flex-col w-[100%] lg:w-[60%] items-center gap-4">
            <Textarea
              className="min-h-[100px] my-2"
              value={value}
              placeholder="Nhập câu lệnh tại đây..."
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            <div className="border border-input shadow-lg min-h-[100px] w-[100%] rounded-lg p-6">
              <div>{tSTL(value)}</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[100%]">
              {latexData.map((data, index) => (
                <Button
                  key={data}
                  className="p-6"
                  onClick={() => {
                    setValue(`${(value += "$" + data + "$")}`);
                  }}
                >
                  <LatexRenderer
                    latex={data}
                    id={`${index}_latexrenderer_latexadd`}
                  ></LatexRenderer>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Đóng</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
