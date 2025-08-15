"use client";
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import ThemeToggleButton from '@/components/ThemeToggleButton';

const AppHeader = () => {

    const handleToggle = () => {
        // Logic to toggle sidebar visibility
    };

  return (
    <header className="sticky top-0 flex w-full bg-gray-200 border-gray-300 z-99999 dark:border-gray-600 dark:bg-gray-800 lg:border-b shadow">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
            <button
                className="p-2 cursor-pointer items-center justify-center border-gray-300 rounded-lg z-99999 dark:border-gray-700 flex border"
                onClick={handleToggle}
            >
                <Bars3BottomLeftIcon className="dark:text-gray-300 text-gray-600 size-6"/>
            </button>
        </div>
        <div className={`flex items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}>
            <div className="flex items-center gap-2 2xsm:gap-3">
                <ThemeToggleButton />
            </div>
            {/* <UserDropdown />  */}
        </div>
      </div>
    </header>
  );
}

export default AppHeader;