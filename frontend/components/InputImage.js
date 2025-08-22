"use client"
import { useState } from 'react';

export default function InputImage(props) {
    const { placeholder, label, state, error } = props;
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            state(file);
            setImagePreview(URL.createObjectURL(file));
        } 
    };

    return (
        <div className="space-y-4 w-full relative mb-8 flex gap-12">
            <div className="w-md relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">{label}</label>
                <input 
                    required
                    type="file" 
                    accept="image/*"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" 
                    placeholder={placeholder} 
                    onChange={handleImageChange}
                />
                {error && <p className="absolute text-red-500 text-sm -bottom-6">{error}</p>}
            </div>
            <div className="mt-2 w-[200px] h-[200px] border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
                {imagePreview && ( 
                    <img src={imagePreview} alt="Image Preview" className="w-[200px] h-[200px] object-cover rounded-md" />
                )}
            </div>
        </div>
    );
}