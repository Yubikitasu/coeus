"use client";

import { api } from "@/convex/_generated/api";
import tSTL from "@/lib/toStringToLatex";
import { useQuery } from "convex/react";
import { useState } from "react";

interface RenderCauHoiProp {
  baiTapId: string;
}

export default function RenderCauHoi({ baiTapId }: RenderCauHoiProp) {
  const data = useQuery(api.query.getCauHoiByBTId, { baiTapId: baiTapId });
  const [value, setValue] = useState(Array(100));
  const [clicked, setClicked] = useState(Array(100));
  function handleAnswer(index: number, choice: string) {
    const array = value;
    if (array[index + 1] == choice && clicked[index + 1] == choice) {
      array[index + 1] = "";
    } else {
      array[index + 1] = choice;
    }
    setValue(array);
    // console.log(value);
  }

  //The latency of [...clicked] causes the handleClicked to be working???

  function handleClicked(index: number, choice: string) {
    const arr = [...clicked];
    if (value[index + 1] == choice) {
      arr[index + 1] = choice;
    } else {
      arr[index + 1] = "";
    }
    setClicked(arr);
    // console.log(clicked);
  }
  return (
    <>
      {data?.map((cauhoi, index) => (
        <div
          className="lg:w-[50%] md:w-[65%] w-[100%] h-auto border border-input p-6 shadow-xs bg-background justify-between items-center rounded-md"
          key={cauhoi._id}
        >
          <div className="font-bold">Câu {index+1}:</div> {tSTL(cauhoi.cauhoi)}
          <div className="space-y-2 mt-4">
            <div
              className={
                "space-x-[5px] w-[100%] p-4 border rounded-lg flex hover:bg-accent cursor-pointer transition " +
                (value[index + 1] == "A" ? "border-black" : "border-input")
              }
              key={cauhoi._id + "_A"}
              onClick={() => {
                handleAnswer(index, "A");
                handleClicked(index, "A");
              }}
            >
              <div className="font-bold">A.</div> {tSTL(cauhoi.cautraloiA)}
            </div>
            <div
              className={
                "space-x-[5px] w-[100%] p-4 border rounded-lg flex hover:bg-accent cursor-pointer transition " +
                (value[index + 1] == "B" ? "border-black" : "border-input")
              }
              key={cauhoi._id + "_B"}
              onClick={() => {
                handleAnswer(index, "B");
                handleClicked(index, "B");
              }}
            >
              <div className="font-bold">B.</div> {tSTL(cauhoi.cautraloiB)}
            </div>
            <div
              className={
                "space-x-[5px] w-[100%] p-4 border rounded-lg flex hover:bg-accent cursor-pointer transition " +
                (value[index + 1] == "C" ? "border-black" : "border-input")
              }
              key={cauhoi._id + "_C"}
              onClick={() => {
                handleAnswer(index, "C");
                handleClicked(index, "C");
              }}
            >
              <div className="font-bold">C. &nbsp;</div>{" "}
              {tSTL(cauhoi.cautraloiC)}
            </div>
            <div
              className={
                "space-x-[5px] w-[100%] p-4 border rounded-lg flex hover:bg-accent cursor-pointer transition " +
                (value[index + 1] == "D" ? "border-black" : "border-input")
              }
              key={cauhoi._id + "_D"}
              onClick={() => {
                handleAnswer(index, "D");
                handleClicked(index, "D");
              }}
            >
              <div className="font-bold">D. &nbsp;</div>{" "}
              {tSTL(cauhoi.cautraloiD)}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
