"use client";

import React, { useState } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
}
interface CreateNewUserProps {
    refreshUsers: () => void;
}

export default function CreateNewUser({ refreshUsers }: CreateNewUserProps) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/users`, newUser);
            setUsers([response.data, ...users]);
            setNewUser({ name: '', email: '' });
        } catch (error) {
            console.error('Error creating user:', error);
        }

        await refreshUsers();
    };

    return (
        <div className="mt-4 bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-gray-100">Create a new user</h2>
                </div>
            </div>
            <div className="divide-y divide-gray-900/5 text-black">
                <form onSubmit={createUser} className='text-sm'>
                    <input
                        placeholder="Name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className="mb-2 w-full p-2 border  rounded"
                    />
                    <input
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        className="mb-2 w-full p-2 border ounded"
                    />
                    <button type="submit" className="mt-4 w-full p-2 text-white tracking-tight font-semibold bg-blue-600 rounded-md hover:bg-blue-500">
                        Add User
                    </button>
                </form>
            </div>
        </div>
    );
};
