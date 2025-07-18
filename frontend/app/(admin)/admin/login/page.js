"use client"
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';


export default function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/back/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        console.log("Response status:", res.status);

        const result = await res.json();
        console.log(result);
    };
    

    return (
        <div className="w-full h-screen flex items-center justify-center dark:bg-gray-800 bg-gray-200">
            <div className="dark:bg-gray-700 bg-white p-8 rounded-lg shadow-lg w-96">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-end mb-4 gap-2 justify-center mb-6">
                        <UserIcon className="dark:text-gray-100 text-gray-900 size-6 mb-2" />
                        <div className="grid grid-cols-1 w-full">
                            <label htmlFor='email' className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                id='email'
                                type="email"
                                className="border border-gray-300 dark:border-gray-500 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                                name='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-end mb-4 gap-2 justify-center mb-6">
                        <LockClosedIcon className="dark:text-gray-100 text-gray-900 size-6 mb-2" />
                        <div className="grid grid-cols-1 w-full">
                            <label htmlFor='pass' className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Password
                            </label>
                            <input
                                id='pass'
                                type="password"
                                className="border border-gray-300 dark:border-gray-500 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                name='pass'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type='submit' className="bg-blue-500 text-white rounded-lg p-2 w-full hover:bg-blue-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
