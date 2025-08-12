import AppSidebar from "@/layouts/AppSidebar";
import AppHeader from "@/layouts/AppHeader";

export default function ContentLayuot({children}) {
    return (
        <div className="w-full h-screen flex dark:bg-gray-900 bg-gray-300">
            <AppSidebar />
            <div className={`flex-1 transition-all duration-300 ease-in-out ml-[290px]`}>
               <AppHeader /> 
                <div className="p-4 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}