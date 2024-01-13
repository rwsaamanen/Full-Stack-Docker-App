import React from 'react';
import RefreshButton from './refresh-button';

interface User {
    id: number;
    name: string;
    email: string;
}
interface UserTableProps {
    users: User[];
    deleteUser: (userId: number) => void;
}

export default function UserTable({ users, deleteUser }: UserTableProps) {
    const sortedUsers = [...users].sort((a, b) => a.id - b.id);

    return (
        <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-gray-100">Recent Users</h2>
                    <p className="text-sm text-gray-300">
                        Fetched {users.length} users
                    </p>
                </div>
                <RefreshButton />
            </div>
            <div className="divide-y divide-gray-900/5">
                {sortedUsers.map((user) => (
                    <div key={user.name} className="flex justify-between items-center py-3">
                        <div className="flex items-center space-x-4">
                            <p className="leading-none text-gray-100 text-xs underline">{user.id}</p>
                            <div className="space-y-1">
                                <p className="font-medium leading-none text-gray-100">{user.name}</p>
                                <p className="text-sm text-gray-300/90">{user.email}</p>
                            </div>
                        </div>
                        <button onClick={() => deleteUser(user.id)} className="hover:bg-gray-900/10 text-gray-50 text-sm py-1 px-2 rounded-md">
                            Delete User
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
