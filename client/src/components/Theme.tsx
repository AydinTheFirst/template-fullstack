import { DarkThemeToggle, Flowbite } from "flowbite-react";

export const Theme = () => {
  return (
    <div className="fixed bottom-0 end-0 z-10 m-3">
      <Flowbite>
        <DarkThemeToggle className="bg-violet-800 text-white hover:bg-purple-700 hover:text-white dark:text-white dark:hover:bg-purple-700" />
      </Flowbite>
    </div>
  );
};
