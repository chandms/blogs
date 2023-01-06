import React, {useState} from 'react';
import ProgramSolution from './ProgramSolution';
import EmptyBlog from './EmptyBlog';
import SecondBlog from './SecondBlog';
import {problems} from './data/coding';
import {median_of_two_sorted_arrays, min_burst_balloons} from './data/coding';


export default function ProgrammingProblems(){

    const [specificBlog, setSpecificBlog] = useState('empty');
    const [title, setTitle] = useState('');
    const [prob_desc, setProbDesc] = useState('');
    const [solution_desc, setSolutionDesc] = useState('');
    const [link, setLink] = useState('');
    const [code, setCode] = useState('');

    const components = {
        empty: EmptyBlog,
        leetcode : ProgramSolution,
        upcoming: SecondBlog,
    };

    return (
    <div className='bg-teal-100'>
        <h1 className='h-auto py-2 flex justify-around  font-bold text-indigo-700 antialiased hover:subpixel-antialiased'> Some interesting leetcode questions!! </h1>
    <div>
    <br></br>
    </div>
    <div className='flex flex-col flex-wrap'>
        <div className='flex flex-row flex-wrap justify-around'>
            
            <div><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit" onClick={()=>{setSpecificBlog('leetcode'); setTitle(problems[0].title); setProbDesc(problems[0].prob_desc); setSolutionDesc(problems[0].solution_desc); setLink(problems[0].link); setCode(median_of_two_sorted_arrays);}}>Median of Two Sorted Arrays</button> </div>
            <p className='inline-flex items-center '> Date - Jan 1, 2023</p>

        </div>
        <br></br>
        <div className='flex flex-row flex-wrap justify-around'>
            
            <div><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit" onClick={()=>{setSpecificBlog('leetcode'); setTitle(problems[1].title); setProbDesc(problems[1].prob_desc); setSolutionDesc(problems[1].solution_desc); setLink(problems[1].link); setCode(min_burst_balloons);}}>Minimum Number of Arrows to Burst Balloons</button> </div>
            <p className='inline-flex items-center '> Date - Jan 6, 2023</p>

        </div>
        <br></br>
        <div className='flex flex-row flex-wrap justify-around'>
            
            <div><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit" onClick={()=>{setSpecificBlog('upcoming');}}>Upcoming Blog</button> </div>
            <p className='inline-flex items-center '> Date - </p>

        </div>
        <div>
        <br></br>
        {(() => {
            const SelectedBlog = components[specificBlog];
            return <SelectedBlog title={title} prob_desc={prob_desc} solution_desc={solution_desc} link={link} code={code} />
             
        })()}
        </div>
    </div>
    </div>
    );
}