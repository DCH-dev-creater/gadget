"use client"
import { useState, useEffect } from 'react';
import { XMarkIcon, CheckIcon, PencilIcon } from '@heroicons/react/24/outline';

export default function BannerList() {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editBanner, setEditBanner] = useState(null);



    useEffect(() => {
        fetch('/back/api/v1/banner/list')
            .then(response => response.json())
            .then(data => {
                setBanners(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching banners:', error);
                setLoading(false);
            });
    }, []);


    const handlerEditSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('url', editBanner.url);
        formData.append('is_active', editBanner.is_active);
        formData.append('sort', editBanner.sort);
        if (editBanner.imageNew) {
            formData.append('image', editBanner.imageNew);
        }

        fetch(`/back/api/v1/banner/edit/${editBanner.id}`, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setBanners(banners.map(banner => banner.id === data.id ? data : banner));
        })
        .catch(error => {
            console.error('Error updating banner:', error);
        });
        // After submission, close the edit form
        
        setEditBanner(null);
    };


    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-100">Загрузка...</p>
            </div>
        );
    }

    return (
        <div className="grid mt-6">
            <div className="grid grid-cols-[50px_150px_1fr_80px_100px_150px] gap-4 border-b text-gray-900 dark:text-gray-100 font-semibold">
                <div>ID</div>
                <div>Изображение</div>
                <div>URL</div>
                <div>Активен</div>
                <div>Сортировка</div>
                <div>Действия</div>
            </div>
            {banners.map(banner => (
                <div key={banner.id} className="grid grid-cols-[50px_150px_1fr_80px_100px_150px] gap-4 items-center border-b text-gray-900 dark:text-gray-100 py-2">
                    <div>{banner.id}</div>
                    <div>
                        {banner.image ? (
                            <img src={banner.image.replace('http://minio-gadget:9000/gadget', 'https://gadget.learn.dev/storage')} alt={`Banner ${banner.id}`} className="w-24 h-24 object-cover rounded-md" />
                        ) : (
                            <span className="text-gray-500">Нет изображения</span>
                        )}
                    </div>
                    <div className="break-all">{banner.url}</div>
                    <div>{banner.is_active ? <CheckIcon className="text-green-500 size-6" /> : <XMarkIcon className="text-red-500 size-6" />}</div>
                    <div>{banner.sort}</div>
                    <div className="flex gap-2 items-center">
                        <button className="cursor-pointer bg-green-500 hover:bg-green-700 p-2 rounded-md" onClick={() => setEditBanner(banner)}>
                            <PencilIcon className="text-white size-6" />
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 cursor-pointer p-2 rounded-md" onClick={() => {}}>
                            <XMarkIcon className="text-white size-6" />
                        </button> 
                    </div>  
                </div>
            ))}

            {editBanner && (
                <div className="fixed bg-black/50 flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 z-[999999]">
                    <form className="bg-white grid gap-4 dark:bg-gray-800 p-6 rounded-md shadow-xl/30 min-w-4xl" onSubmit={handlerEditSubmit}>
                        <label>
                            URL:
                            <input 
                                type="text" 
                                defaultValue={editBanner.url} 
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" 
                                onChange={e => 
                                    setEditBanner({
                                        ...editBanner,
                                        url: e.target.value
                                    })     
                                }
                                
                                />
                        </label>
                        <label>
                            Изображение:
                            <input 
                                type="file" 
                                accept='image/*'
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" 
                                onChange={e => 
                                    setEditBanner({
                                        ...editBanner,
                                        imageNew: e.target.files[0]
                                    })     
                                }
                            />
                        </label>
                        <label className="flex items-center gap-2 mb-4">
                            Активен:
                            <input 
                                type="checkbox" 
                                defaultChecked={editBanner.is_active} 
                                className="form-checkbox h-4 w-4 text-blue-600"
                                onChange={e => 
                                    setEditBanner({
                                        ...editBanner,
                                        is_active: e.target.checked
                                    })     
                                }
                            />
                        </label>
                        <label>
                            Сортировка:
                            <input 
                                type="number" 
                                defaultValue={editBanner.sort} 
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                onChange={e => 
                                    setEditBanner({
                                        ...editBanner,
                                        sort: parseInt(e.target.value, 10)
                                    })     
                                }
                            />
                        </label>
                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={() => setEditBanner(null)} className="px-4 py-2 bg-blue-300 hover:bg-blue-400 rounded-md">Отмена</button>    
                            <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">Сохранить</button>
                        </div>
                    </form>
                </div>
            )}
          
        </div>
    );
}