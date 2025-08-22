"use client"

export default function InputText(props) {
    const { placeholder, label, state, error } = props;

    return (
        <div className="space-y-4 w-full relative mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">{label}</label>
            <input 
                required
                type="text" 
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" 
                placeholder={placeholder} 
                onChange={(e) => state(e.target.value)}
            />
            {error && <p className="absolute text-red-500 text-sm -bottom-6">{error}</p>}
        </div>
    );
}