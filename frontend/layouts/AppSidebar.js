"use client";
import { ChartBarIcon, PhotoIcon, ArchiveBoxIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: <ChartBarIcon className="size-4" />, name: 'Dashboard', path: '/admin/dashboard' },
  { icon: <PhotoIcon className="size-4" />, name: 'Banners', path: '/admin/banner' },
  { icon: <ArchiveBoxIcon className="size-4" />, name: 'Products', path: '/admin/product' },
  { icon: <CurrencyDollarIcon className="size-4" />, name: 'Orders', path: '/admin/order' },
]

const AppSidebar = () => {

  const pathname = usePathname();

  return (
    <aside className='fixed w-[290px] mt-16 flex flex-col lg:mt-0 top-0 left-0 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200' >
      <div className='text-xl bg-violet-300 dark:bg-violet-900 h-[74px] font-bold dark:text-gray-100 flex items-center justify-center'>GadGet</div>
      <nav className='mt-5 px-5'>
        <ul className='space-y-2'>
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index}>
                <Link href={item.path} className={`flex items-center space-x-3 p-2 rounded transition-colors 
                  ${isActive ? 'bg-violet-600 dark:bg-violet-400 dark:text-white text-white' : 'hover:bg-violet-300 dark:hover:bg-violet-800 dark:text-gray-100 text-gray-900'}`}>
                  <span className='mr-2'>{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto mb-5">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">© {new Date().getFullYear()} GadGet. All rights reserved.</p>
      </div>
    </aside>
  );
}

export default AppSidebar;