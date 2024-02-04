import { cn } from '@samuha/utils';
import { AlignJustifyIcon, SearchIcon, UserCircleIcon } from 'lucide-react';

export const TopNav = () => {
  return (
    <section className="py-3 px-2 bg-white flex items-center justify-between sticky top-0 z-20 border-b border-gray-200 shadow">
      <div className="flex items-center">
        <button className={cn()}>
          <AlignJustifyIcon />
        </button>
      </div>
      <div className="ml-7 flex items-center relative text-gray-700">
        <SearchIcon className="absolute left-2" />
        <input
          type="text"
          name="search"
          id="search"
          className={cn(
            'py-2 pl-11 rounded w-[527px] bg-stone-100',
            'focus:outline-none font-medium focus:border-blue-400 text-gray-500'
          )}
          placeholder="Search"
        />
      </div>
      <div className="flex justify-end">
        <div className="flex items-center gap-4 text-secondary-600">
          <button
            type="button"
            className="px-2 py-2 flex items-center justify-center hover:rounded hover:bg-secondary-ternary transition-all duration-500"
          >
            <UserCircleIcon />
          </button>
        </div>
      </div>
    </section>
  );
};
export default TopNav;
