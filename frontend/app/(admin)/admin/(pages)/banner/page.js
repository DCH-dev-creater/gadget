import BannerList from "@/components/BannerList";

export default function Banner() {
  
    return (
        <div className="w-full h-full grid gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h1 className="text-gray-900 dark:text-white text-2xl font-bold">Список баннеров</h1>
            <div className="grid justify-end">
                <a href="/admin/banner/create" className="rounded-md border p-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white">Добавить баннер</a>
            </div>
            <BannerList />
        </div>
    );
}
