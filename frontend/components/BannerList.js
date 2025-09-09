"use client"
import { useState, useEffect } from 'react';
import RowTable from './RowTable';
import Modal from './Modal';

export default function BannerList() {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editBanner, setEditBanner] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/back/api/v1/banner/list')
        .then(response => response.json())
        .then(data => {
            setBanners(data);
            setLoading(false);
            setError(null);
        })
        .catch(error => {
            console.error('Error fetching banners:', error);
            setError('Ошибка при загрузке баннеров');
            setLoading(false);
        });
    }, []);

    const handleDelete = (id) => {
        if (!confirm('Вы уверены, что хотите удалить этот баннер?')) {
            return;
        }
        fetch(`/back/api/v1/banner/delete/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.status === 404) {
                throw new Error('Запись не найдена');
            }
            if (response.status !== 200) {
                throw new Error('Удаление не удалось');
            }
            
            setBanners(banners.filter(banner => banner.id !== id));
        })
        .catch(error => {
            console.error('Error deleting banner:', error);
            setError(error.message);
        });
    };

    if (error) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-100">{error}</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-100">Загрузка...</p>
            </div>
        );
    }

    return (
        <div className="grid">
            <div className="text-gray-900 dark:text-white p-4 grid grid-cols-[50px_150px_1fr_80px_100px_150px] gap-6 items-center border rounded-tl-lg rounded-tr-lg  bg-gray-50 dark:bg-gray-700">
                <div>ID</div>
                <div>Баннер</div>
                <div>URL</div>
                <div>Активен</div>
                <div>Сорт</div>
                <div className='flex gap-2 items-center'>Действия</div>
            </div>
            {banners.map(banner => (
                <RowTable key={banner.id} banner={banner} setEditBanner={setEditBanner} handleDelete={handleDelete} />
            ))}
            {editBanner && <Modal editBanner={editBanner} setEditBanner={setEditBanner} banners={banners} setBanners={setBanners}/>}
        </div>
    );
}
