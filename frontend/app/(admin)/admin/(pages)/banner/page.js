import BannerList from "@/components/BannerList";

export default function Banner() {
  
    return (
        <div className="w-full h-full grid bg-white dark:bg-gray-800 rounded-lg">
            <h1 className="text-gray-900 dark:text-white text-2xl font-bold">Список баннеров</h1>
            <div className="grid justify-end">
                <a href="/admin/banner/create" className="cursor-pointer rounded-md border px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white">Создать</a>
            </div>
            <BannerList />
        </div>
    );
}
