import ExpandingArrow from '@/components/expanding-arrow';
import Link from 'next/link';
import React from 'react'

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center p-4">
            <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full mt-40 mb-10">
                <div className="flex justify-between items-center">
                    <h1 className='max-w-xl font-semibold text-xl tracking-tighter text-gray-200 hover:text-white'>
                        A simple user manager using Next.js, TypeScript, and Tailwind CSS for the front end, with Node.js, Express.js, and PostgreSQL for the back end, all composed using Docker.
                    </h1>
                </div>
            </div>
            <Link
                href="https://github.com/rwsaamanen/Full-Stack-Dockers-App"
                className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/20 shadow-sm ring-1 ring-gray-900/5 text-gray-200 hover:text-white hover:underline text-sm font-medium px-10 py-2 hover:shadow-xl active:shadow-sm transition-all"
            >
                <p>Source code</p>
                <ExpandingArrow />
            </Link>
        </main>
    );
};

export default Home