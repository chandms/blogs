import React, {useState} from 'react';
import MedianOfTwoSortedArrays from './MedianTwoSortedArrays';
import EmptyBlog from './EmptyBlog';
import SecondBlog from './SecondBlog';

export default function ProgrammingProblems(){

    const [specificBlog, setSpecificBlog] = useState('empty');
    const components = {
        empty: EmptyBlog,
        leetcode4 : MedianOfTwoSortedArrays,
        upcoming: SecondBlog,
    };

    return (
    <div className='bg-teal-100'>
        <h1 className='font-bold text-indigo-700 antialiased hover:subpixel-antialiased'> Some interesting interview questions!! </h1>
    <div>
    <br></br>
    </div>
    <div className='flex flex-col flex-wrap'>
        <div className='grid grid-cols-2 gap-4'>
            
            <div><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit" onClick={()=>{setSpecificBlog('leetcode4');}}>Median of Two Sorted Arrays</button> </div>
            <p className='inline-flex items-center '> Date - Jan 1, 2023</p>

        </div>
        <br></br>
        <div className='grid grid-cols-2 gap-4'>
            
            <div><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit" onClick={()=>{setSpecificBlog('upcoming');}}>Upcoming Blog</button> </div>
            <p className='inline-flex items-center '> Date - Jan 1, 2023</p>

        </div>
        <div>
        {(() => {
            const SelectedBlog = components[specificBlog];
            return <SelectedBlog/>
             
        })()}
        </div>
    </div>
    </div>
    );
}