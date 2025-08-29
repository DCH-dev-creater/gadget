"use client"
import { useState } from 'react';
import { Button, Switch } from '@headlessui/react'

import InputText from '@/components/InputText';
import InputImage from '@/components/InputImage';
import InputCheckbox from '@/components/InputCheckbox';


export default function CreateBanner() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState(null);
    const [enabled, setEnabled] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url || !image) {
            setError('Данные обязательны для заполнения');
            return;
        }

        const formData = new FormData();
        formData.append('url', url);
        formData.append('image', image);
        formData.append('active', enabled);

        try {
            const response = await fetch('/back/api/v1/banner/create', {
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
                
                <span className="text-gray-700 dark:text-gray-100">Активен</span>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className="group flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600">
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>
            
                <Button type="submit" className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-hover:bg-sky-500 data-hover:data-active:bg-sky-700">
                    Create Banner
                </Button>
            </form>
        </>
    );
}
