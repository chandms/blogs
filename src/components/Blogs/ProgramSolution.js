import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";
import { CopyBlock,  monokaiSublime } from "react-code-blocks";

export default function ProgramSolution(props){
    return (
        <div className='bg-pink-200'>
        <div className='h-24 bg-gradient-to-r from-purple-500 to-pink-500" flex flex-col flex-wrap justify-center shadow-lg'>
            <h1 className='m-auto font-mono text-white'>{props.title}</h1>
            <a
            href={props.link}
            className="inline-flex m-auto items-center underline text-blue-800 border-0 py-1 px-2 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
            Leetcode Link
            <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
        </div>
        <div className='flex justify-center items-center'>
            <h2 className='bg-white-100 text-amber-900 antialiased hover:subpixel-antialiased'>{props.prob_desc}</h2>
        </div>
        <div className='mt-3 shadow-lg bg-violet-300'>
            {
                props.solution_desc?.map((sol) => {
                    return (
                        <div key={sol}>
                        <p>{sol}</p>
                        <br></br>
                        </div>
                        
                    )
                })
            }

                


        </div>
        <div className='mt-3'>
        <CopyBlock
            text={props.code}
            language="cpp"
            theme={monokaiSublime}
            wrapLines
            />  
        </div>
    </div>);
}