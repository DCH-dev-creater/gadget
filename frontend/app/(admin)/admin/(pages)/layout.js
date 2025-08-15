import AppSidebar from "@/layouts/AppSidebar";
import AppHeader from "@/layouts/AppHeader";

export default function ContentLayuot({children}) {
    return (
        <div className="w-full h-screen flex dark:bg-gray-900 bg-white">
            <AppSidebar />
            <div className={`flex-1 transition-all duration-300 ease-in-out ml-[290px]`}>
               <AppHeader /> 
                <div className="p-4 w-full bg-white dark:bg-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
}