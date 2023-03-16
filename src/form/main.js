import React, { useState } from "react";
// import Progress from "./progress";

import Page1 from "./form1";
import Page2 from "./form2";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Progress } from "./progress";

export default function MainForm() {
  //   const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(50);
  const [page, setPage] = useState(1);
  console.log(page);
  const increase = () => {
    setPage((page) => page + 1);
    setProgress(100);
  };
  const decrease = () => {
    setPage((page) => page - 1);
    setProgress(50);
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-4 pt-24 pb-20">
      <div className="m-2 mx-auto h-full p-3 max-w-md rounded-md overflow-hidden bg-white">
        <div className="flex justify-between items-center font-semibold ">
          <p>complete store creation</p>
          <p className="text-sky-600 font-semibold">Step {page} / 2</p>
        </div>
        <Progress progress={progress} />
        <div>
          <div>
            {page === 1 ? (
              <Page1 increase={increase} />
            ) : page === 2 ? (
              <Page2 decrease={decrease} setProgress={setProgress} />
            ) : null}
          </div>
        </div>
        <div className="whatsss rounded-full bg-sky-600 flex justify-center items-center shadow-xl w-[60px] h-[60px] hover:text-black">
          <Link to="/" className=" ">
            <BsArrowLeftCircle />
          </Link>
        </div>
      </div>
    </div>
  );
}
