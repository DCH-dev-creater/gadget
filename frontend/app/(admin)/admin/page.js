import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Auth() {
  
    return (
        <div className="w-full h-screen flex items-center justify-center dark:bg-gray-800 bg-gray-200">
            <div className="dark:bg-gray-700 bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="flex items-end mb-4 gap-2 justify-center mb-6">
                    <UserIcon className="dark:text-gray-100 text-gray-900 size-6 mb-2" />
                    <div className="grid grid-cols-1 w-full">
                        <label htmlFor='email'  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            id='email'
                            type="email"
                            className="border border-gray-300 dark:border-gray-500 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                        />
                    </div>
                </div>
                <div className="flex items-end mb-4 gap-2 justify-center mb-6">
                    <LockClosedIcon className="dark:text-gray-100 text-gray-900 size-6 mb-2" />
                    <div className="grid grid-cols-1 w-full">
                        <label htmlFor='pass'  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Password
                        </label>
        
                        <input
                            id='pass'
                            type="password"
                            className="border border-gray-300 dark:border-gray-500 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                </div>
                <button className="bg-blue-500 text-white rounded-lg p-2 w-full hover:bg-blue-600">
                    Login
                </button>
            </div>
        </div>

    );
}
