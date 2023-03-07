import Actions from "./Actions"

import { Link } from "react-router-dom"

export default function Table(){



    return(
        <div className="mx-auto grid max-h-full w-full max-w-3xl grid-rows-auto-1fr overflow-y-hidden rounded-lg">
    
        <div className="inner-scroll grid max-h-full overflow-y-auto">
          <div className="relative table h-max w-full table-auto border-collapse rounded-lg bg-white font-grotesk text-sm shadow">
            <div className="sticky top-0 table-header-group  w-full border-b-2 border-slate-100 bg-white">
              <div className="table-row font-bold text-neutral-800">
                <div className="table-cell px-2 py-3 text-left " aria-label="select" />
                <div className="table-cell px-2 py-3 text-left">Image</div>
                <div className="table-cell px-2 py-3 text-left text-neutral-800">Description</div>
                <div className="table-cell px-2 py-3 text-left text-neutral-800">Value</div>
                <div className="table-cell px-2 py-3 text-left text-neutral-800" aria-label="details" />
              </div>
            </div>
  
            <div className="table-row-group">
               
            <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
         
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
          images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
       currency
      </div>
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-[2px] pr-2 text-end align-middle md:px-8">
        <button type="button" className="grid w-full items-end">
          <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-[2px] py-[2px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Details
          </Link>
        </button>
      </div>
    </div>







    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
         
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
        images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
       currency
      </div>
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-[2px] pr-2 text-end align-middle md:px-8">
        <button type="button" className="grid w-full items-end">
          <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-[2px] py-[2px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Details
          </Link>
        </button>
      </div>
    </div>









    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
         
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
        images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
       currency
      </div>
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-[2px] pr-2 text-end align-middle md:px-8">
        <button type="button" className="grid w-full items-end">
          <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-[2px] py-[2px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Details
          </Link>
        </button>
      </div>
    </div>








    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"

          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
        images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
       currency
      </div>
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-[2px] pr-2 text-end align-middle md:px-8">
        <button type="button" className="grid w-full items-end">
          <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-[2px] py-[2px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Details
          </Link>
        </button>
      </div>
    </div>







    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
         
          id=""
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
        images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
        currency
      </div>
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-[2px] pr-2 text-end align-middle md:px-8">
        <button type="button" className="grid w-full items-end">
          <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-[2px] py-[2px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Details
          </Link>
        </button>
      </div>
    </div>






    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
          
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
        images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">description</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
       currency
      </div>
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-[2px] pr-2 text-end align-middle md:px-8">
        <button type="button" className="grid w-full items-end">
          <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-[2px] py-[2px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Details
          </Link>
        </button>
      </div>
    </div>




    <div className="table-row max-h-24 w-full cursor-pointer py-4 hover:bg-slate-300">
      <div className="table-cell h-24 w-max border-b border-b-slate-100 px-2 py-4 text-center align-middle">
        <input
          type="checkbox"
          name="select"
         
          className="flex aspect-square h-6 cursor-pointer appearance-none items-center justify-center rounded-md border border-slate-700 bg-slate-200 outline-none after:hidden  after:aspect-square after:h-6 after:rounded-md after:font-['Font_Awesome_5_Free'] after:text-xs after:font-bold after:text-white after:content-['\f00c'] checked:border-transparent checked:after:grid checked:after:items-center checked:after:justify-center after:checked:bg-sky-500"
        />
      </div>
      <div className=" mx-2 table-cell border-b border-b-slate-100 align-middle md:mx-4">
        images
      </div>
      <div className="overflow-hidde table-cell h-24 border-b border-b-slate-100 px-[3px] align-middle text-xs md:px-4">
        <p className="line-clamp-3">desc</p>
      </div>
      <div className="table-cell border-b border-b-slate-100 px-[2px] align-middle text-xs md:text-sm">
        currency
      </div>
      <div className="table-cell max-h-24 border-b border-b-slate-100 px-[2px] pr-2 text-end align-middle md:px-8">
        <button type="button" className="grid w-full items-end">
          <Link
            to="activity"
            className="w-max cursor-pointer justify-self-end rounded border border-transparent bg-sky-600 px-[2px] py-[2px] text-xs text-white hover:border-sky-500 hover:bg-white hover:text-sky-600"
          >
            Details
          </Link>
        </button>
      </div>
    </div>















                  
            </div>
          </div>
        </div>
      </div>
    )
}