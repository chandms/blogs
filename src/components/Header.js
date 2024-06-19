import React from 'react';

export default function Header(){
    return (
        <div>
            <div className='bg-slate-100 h-14 flex justify-center shadow-lg'>
            <a href="https://chandms.github.io/" className='m-auto text-blue-800 font-mono border-0 py-1 px-3 hover:bg-blue-200 rounded'>Chandrika Mukherjee</a>
        </div>
        <div className='bg-slate-400 h-14 flex justify-center shadow-lg'>
            <h1 className='m-auto font-mono text-white'>Welcome to My Blogs</h1>
        </div>
        </div>
    );
}