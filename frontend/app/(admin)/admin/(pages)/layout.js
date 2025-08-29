"use client"

import { useState } from 'react';
import AppSidebar from "@/layouts/AppSidebar";
import AppHeader from "@/layouts/AppHeader";
import { Transition } from '@headlessui/react'

export default function ContentLayuot({children}) {
    const [open, setOpen] = useState(true)

    return (
        <div className="w-full h-screen flex dark:bg-gray-900 bg-white">
            <Transition show={open}>
                <div className={`transition-all duration-300 transition-normal data-closed:-translate-x-[290px]`}>
                    <AppSidebar />
                </div>
            </Transition>
            <div className={`flex-1 transition-all duration-400 transition-normal flex flex-col ${open ? 'ml-[290px]' : 'ml-0'}`}>
               <AppHeader setOpen={setOpen} /> 
                <div className="p-4 w-full bg-white dark:bg-gray-900">
                    <div className="w-full h-full grid items-center justify-left p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"> 
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}