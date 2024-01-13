"use client";

import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ExpandingArrow from '@/components/expanding-arrow';
import TablePlaceholder from '@/components/table-placeholder';
import UserTable from '@/components/user-table';
import CreateNewUser from '@/components/create-user-table';
import UpdateUser from '@/components/update-user-table';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data.reverse());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteUser = async (userId: number) => {
    try {
      await axios.delete(`${apiUrl}/users/${userId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-4">
      <Link
        href="https://github.com/rwsaamanen/Full-Stack-Dockers-App"
        className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/20 shadow-sm ring-1 ring-gray-900/5 text-gray-200 text-sm font-medium px-10 py-2 hover:text-white hover:underline hover:shadow-xl active:shadow-sm transition-all"
      >
        <p>Source code</p>
        <ExpandingArrow />
      </Link>
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-gray-100 via-gray-400 to-gray-700 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl underline">
        Next.js, Node, and Postgres
      </h1>

      <Suspense fallback={<TablePlaceholder />}>
        <UserTable users={users} deleteUser={handleDeleteUser} />
      </Suspense>
      <CreateNewUser refreshUsers={fetchData} />
      <UpdateUser refreshUsers={fetchData} />
    </main>
  );
};
