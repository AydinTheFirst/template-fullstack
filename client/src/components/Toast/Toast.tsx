import { Toast } from "flowbite-react";

export const ToastBox = () => {
  return (
    <Toast
      id="toast"
      className="invisible fixed bottom-0 end-0 z-50 m-3 dark:bg-slate-700"
    >
      <div
        id="toast-body"
        className="ml-3 overflow-auto pb-1 text-sm font-normal"
      ></div>
      <Toast.Toggle className="dark:bg-slate-700" />
    </Toast>
  );
};

/**
    {document.getElementById("toast")?.getAttribute("data-type") ===
      "success" ? (
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
      ) : (
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
      )}
 */
