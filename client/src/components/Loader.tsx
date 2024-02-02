import { Spinner } from "flowbite-react";

export const Loader = () => {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-900">
      <Spinner aria-label="Default status example" size={"xl"} />
    </div>
  );
};
