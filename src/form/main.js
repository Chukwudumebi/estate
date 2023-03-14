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
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-scroll p-4 pt-24 pb-20">
      <div className="m-2 mx-auto h-full p-2 max-w-md rounded-md overflow-hidden bg-white">
        <div className="flex justify-between items-center font-semibold ">
          <p>complete store creation</p>
          <p className="text-sky-500 font-bold">step {page} / 2</p>
        </div>
        <Progress progress={progress} />
        <center>
          <div>
            {page === 1 ? (
              <Page1 increase={increase} />
            ) : page === 2 ? (
              <Page2 decrease={decrease} setProgress={setProgress} />
            ) : null}
          </div>
          {/* {page > 1 && (
            <button
              className="flex-initial rounded-md border border-transparent bg-sky-600 px-3 py-2 text-white hover:border-neutral-700 hover:bg-white hover:text-neutral-700"
              onClick={decrease}
            >
              back
            </button>
          )} */}
          {/* {page === 1 && (
            <button
              className="flex-initial rounded-md border border-transparent bg-sky-600 px-3 py-2 text-white hover:border-neutral-700 hover:bg-white hover:text-neutral-700"
              onClick={increase}
            >
              next
            </button>
          )} */}
        </center>
        <div className="whatsss rounded-full bg-sky-600 flex justify-center items-center shadow-xl w-[60px] h-[60px] hover:text-black">
          <Link to="/" className=" ">
            <BsArrowLeftCircle />
          </Link>
        </div>
      </div>
    </div>
  );
}
