import * as Dialog from '@radix-ui/react-dialog';






export default function Dialogs(){


    return(
        <div>
             <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="rounded-full bg-white px-3 py-1 text-sm text-neutral-900 active:bg-sky-500 active:text-white active:shadow-none "
        >
          Send
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-neutral-900/20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div>
            <div className="flex items-center justify-between border-b p-3">
              <form className="flex  w-full items-center justify-center">
                <label className="flex w-full">
                  <input
                    type="text"
                
                    placeholder="Search Users..."
        
                    className=" focus: text-gray-2 w-full rounded-l-lg border-2 border-gray-100 bg-transparent px-2  outline-blue-500 focus:outline-none focus:outline"
                  />
                  <span className=" rounded-r-lg border-2 border-l-0 border-gray-100 py-2 px-3 outline-blue-200 hover:cursor-pointer hover:bg-blue-400 focus:outline">
                    
                  </span>
                </label>
              </form>
            </div>
            <div className="flex h-24 flex-col overflow-y-scroll">
             
            </div>

            <div className="flex items-center justify-around border-t p-2 py-8">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded border-none bg-red-600 px-2 py-2 text-white shadow-md duration-300 hover:bg-red-500 hover:shadow-lg hover:transition-all"
                >
                  cancel
                </button>
              </Dialog.Close>
              <button
                type="button"
                className=" rounded border-none bg-blue-500 px-4 py-2 text-white shadow-sm duration-300 hover:bg-blue-400 hover:shadow-lg hover:transition-all"
              >
                send
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>






        </div>
    )
}