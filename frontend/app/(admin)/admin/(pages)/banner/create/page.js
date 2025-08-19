"use client"
import { useState } from 'react';

import InputText from '@/components/InputText';
import InputImage from '@/components/InputImage';


export default function CreateBanner() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url || !image) {
            setError('Данные обязательны для заполнения');
            return;
        }

        const formData = new FormData();
        formData.append('url', url);
        formData.append('image', image);

        try {
            const response = await fetch('/api/banner/create', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Ошибка при создании баннера');
            }

            // Reset form after successful submission
            setUrl('');
            setImage(null);
            setError('');

        } catch (err) {
            console.error(err);
            setError('Произошла ошибка при создании баннера');
        }

    }

    return (
        <>
            <h3 className="text-2xl font-bold my-4">Create Banner</h3>
            <form className="space-y-4 w-full mx-auto" onSubmit={handleSubmit}>
                <InputText placeholder='Введите ссылку' label='Целевой URL' state={setUrl} error={error} />
                <InputImage placeholder='Выберите изображение' label='Изображение баннера' state={setImage} error={error} />
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Create Banner</button>
            </form>
        </>
    );
}
