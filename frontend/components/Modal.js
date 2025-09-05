export default function Modal(props) {
    
    const { editBanner, setEditBanner, banners, setBanners } = props;

        const handlerEditSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData();
            
            formData.append('url', editBanner.url);
            formData.append('is_active', editBanner.is_active);
            formData.append('sort', editBanner.sort);
            if (editBanner.newImageFile) {
                formData.append('image', editBanner.newImageFile);
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
    
    return (
        <div className="bg-gray-900/70 text-gray-900 dark:text-white absolute w-full h-full top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center p-8 overflow-hidden z-[99999]">
            <form onSubmit={handlerEditSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md min-w-3xl space-y-4 shadow-xl/30">
                <h3>Редактировать баннер #{editBanner.id}</h3>
                <label>URL:
                    <input
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" 
                        type="text"
                        value={editBanner.url}
                        onChange={e => setEditBanner({ ...editBanner, url: e.target.value })}
                    />
                </label>
                <br />
                <label>Image:
                    <input
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" 
                        type="file"
                        accept="image/*"
                        onChange={e => setEditBanner({ ...editBanner, newImageFile: e.target.files[0] })}
                    />
                </label>
                <br />
                <label>Sort:
                    <input
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500" 
                        type="number"
                        value={editBanner.sort}
                        onChange={e => setEditBanner({ ...editBanner, sort: Number(e.target.value) })}
                    />
                </label>
                <br />
                <button className='rounded-md border p-4 bg-green-600 hover:bg-green-700 cursor-pointer text-white mr-8' type="submit">Сохранить</button>
                <button className='rounded-md border p-4 bg-red-600 text-white cursor-pointer hover:bg-red-700' type="button" onClick={() => setEditBanner(null)}>
                    Отмена
                </button>
            </form>
        </div>
      )
}