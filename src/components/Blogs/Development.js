import React, {useState} from 'react';
import Portfolio from './Portfolio';
import EmptyBlog from './EmptyBlog';
import SecondBlog from './SecondBlog';

export default function Development(){

    const [specificBlog, setSpecificBlog] = useState('empty');
    const components = {
        empty: EmptyBlog,
        portfolio : Portfolio,
        upcoming: SecondBlog,
    };

    return (
    <div className='bg-teal-100'>
        <h1 className='h-auto py-2 flex justify-around  font-bold text-indigo-700 antialiased hover:subpixel-antialiased hover:text-pink-400'> Will be updating my learnings related to Software Developmet here!! </h1>
    <div>
    <br></br>
    </div>
    <div className='flex flex-col flex-wrap'>
        <div className=' flex flex-row flex-wrap justify-around'>
            
            <div><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit" onClick={()=>{setSpecificBlog('portfolio');}}> <h1 className='underline font-mono'> Building My Portfolio </h1> <p className='inline-flex items-center '> Date - Jan 2, 2023</p> </button> </div>
            

        </div>
        <br></br>
        <div className='flex flex-row flex-wrap justify-around'>
            
            <div><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit" onClick={()=>{setSpecificBlog('upcoming');}}> <h1 className='underline font-mono'>Upcoming Blog </h1> <p className=' text-sm '> Date - </p></button> </div>
            

        </div>
        <br></br>
    </div>
    <div>
        {(() => {
            const SelectedBlog = components[specificBlog];
            return <SelectedBlog/>
             
        })()}
        </div>
    </div>
    );
}