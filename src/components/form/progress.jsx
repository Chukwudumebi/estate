import * as ProgressPrimitive from "@radix-ui/react-progress";
import React, { useState} from "react";




export function Progress({progress}) {
  

 
  return (
    <ProgressPrimitive.Root
      value={progress}
      className="h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-900"
    >
      <ProgressPrimitive.Indicator
        style={{ width: `${progress}%` }}
        className="h-full bg-sky-500 duration-300 ease-in-out dark:bg-gray-900"
      />
    </ProgressPrimitive.Root>
  );
}

