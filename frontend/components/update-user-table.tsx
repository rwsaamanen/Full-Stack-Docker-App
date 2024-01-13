"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UpdateUserProps {
    refreshUsers: () => void;
}
export default function UpdateUser({ refreshUsers }: UpdateUserProps) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const [users, setUsers] = useState<User[]>([]);
    const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/users`);
                setUsers(response.data.reverse());
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`${apiUrl}/users/${updateUser.id}`, { name: updateUser.name, email: updateUser.email });
            setUpdateUser({ id: '', name: '', email: '' });
            setUsers(
                users.map((user) => {
                    if (user.id === parseInt(updateUser.id)) {
                        return { ...user, name: updateUser.name, email: updateUser.email };
                    }
                    return user;
                })
            );
        } catch (error) {
            console.error('Error updating user:', error);
        }

        await refreshUsers();
    };

    return (
        <div className="mt-4 bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-gray-100">Update user</h2>
                </div>
            </div>
            <div className="divide-y divide-gray-900/5">
                <form onSubmit={handleUpdateUser} className='text-sm'>
                    <input
                        placeholder="User ID"
                        value={updateUser.id}
                        onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
                        className="mb-2 w-full p-2 border rounded"
                    />
                    <input
                        placeholder="New Name"
                        value={updateUser.name}
                        onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
                        className="mb-2 w-full p-2 border rounded"
                    />
                    <input
                        placeholder="New Email"
                        value={updateUser.email}
                        onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
                        className="mb-2 w-full p-2 border rounded"
                    />
                    <button type="submit" className="mt-4 w-full p-2 text-white tracking-tight font-semibold bg-blue-600 rounded-md hover:bg-blue-500">
                        Update User
                    </button>
                </form>
            </div>
        </div>
    );
};