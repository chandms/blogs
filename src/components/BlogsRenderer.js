import Collapsible from 'react-collapsible';
import React, { useState } from 'react';
import { ArrowsExpandIcon} from "@heroicons/react/solid";
import Header from './Header';
import blogs from '../jsons/blog_list.json';
import MedianOfTwoSortedArrays from './Blogs/MedianTwoSortedArrays';
import SecondBlog from './Blogs/SecondBlog';
import EmptyBlog from './Blogs/EmptyBlog';

export default function BlogRenderer(){
    const blog_files = blogs.blogs;
    const [blog, setBlog] = useState('empty');
    const [showModal, setShowModal] = React.useState(false);

    const components = {
        empty: EmptyBlog,
        leetcode4 : MedianOfTwoSortedArrays,
        upcoming : SecondBlog
    };

    return (
        <div>
        <Header/>
        <div className='mt-2 h-16 bg-lime-200 shadow-lg'>
        <div className="flex flex-row flex-wrap place-content-around pt-2 pb-2">
            {blog_files.map(( cur_blog )=>(
                    <div key={cur_blog} className='m-auto font-mono text-white'>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 
                        font-semibold hover:text-white py-2 px-4 border border-blue-500 
                        hover:border-transparent rounded w-fit" onClick={()=>{setBlog(cur_blog);setShowModal(true);}}>{cur_blog}</button>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-fuchsia-900 text-lg leading-relaxed">
                    Selected Blog - {blog}
                  </p>
                  <p className='text-slate-500 text-sm leading-relaxed'>click the expand arrow to read/close</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                    </div>
            ))}
            
        </div>
    </div>
    <div className='mt-2 bg-neutral-200 shadow-lg'>
        <Collapsible trigger={<ArrowsExpandIcon className="w-10 h-10 mx-auto text-center hover:bg-indigo-700 rounded " />}>
        
        {(() => {
            const SpecificBlog = components[blog];
            return <SpecificBlog/>
             
        })()}
                                
        </Collapsible>

    </div>
    </div>
    );
}