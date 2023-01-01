import React from 'react';

export default function Header(){
    return (
        <div>
            <div className='bg-cyan-500 h-14 flex justify-center shadow-lg'>
            <a href="https://chandms.github.io/ChandrikaPortfolio/" className='m-auto font-mono text-white'>Chandrika Mukherjee</a>
        </div>
        <div className='bg-teal-900 h-14 flex justify-center shadow-lg'>
            <h1 className='m-auto font-mono text-white'>Blogs</h1>
        </div>
        </div>
    );
}