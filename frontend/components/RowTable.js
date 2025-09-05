import { CheckIcon, XMarkIcon, PencilIcon } from '@heroicons/react/24/solid';

export default function RowTable(props) {
    const { banner, setEditBanner, handleDelete } = props;
    const { id, image, url, is_active, sort } = banner;

    return (<div key={id} className="text-gray-900 dark:text-white p-4 grid grid-cols-[50px_150px_1fr_80px_100px_150px] gap-6 items-center border-x border-b bg-gray-50 dark:bg-gray-700">
        <div>{id}</div>
        <img
            src={image.replace('http://minio-gadget:9000/gadget', 'https://gadget.learn.dev/storage')}
            alt={`Banner ${id}`}
            className='w-24 h-24 object-cover rounded-md'
        />
        <div>{url}</div>
        <div>{is_active ? <CheckIcon className="text-green-500 size-6" /> : <XMarkIcon className="text-red-500 size-6" />}</div>
        <div>{sort}</div>
        <div className='flex gap-2 items-center'>
            <button onClick={() => setEditBanner(banner)} className="cursor-pointer bg-green-500 hover:bg-green-700 p-2 rounded-md">
                <PencilIcon className="text-white size-6" />
            </button>
            <button onClick={() => handleDelete(id)} className="bg-red-500 hover:bg-red-700 cursor-pointer p-2 rounded-md">
                <XMarkIcon className="text-white size-6" />
            </button>
        </div>
    </div>)
}   