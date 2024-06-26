// import Collapsible from 'react-collapsible';
import React, { useState } from 'react';
// import { ArrowsExpandIcon} from "@heroicons/react/solid";
import Header from './Header';
import blogs from '../jsons/blog_list.json';
import EmptyBlog from './Blogs/EmptyBlog';
import ProgrammingProblems from './Blogs/ProgrammingProblems';
import Development from './Blogs/Development';
import Security from './Blogs/Security';
import Personal from './Blogs/Personal';


export default function BlogRenderer(){
    const blog_files = blogs.blogs;
    const [blog, setBlog] = useState('ProgrammingProblems');
    const [showModal, setShowModal] = React.useState(false);

    const components = {
        empty: EmptyBlog,
        ProgrammingProblems : ProgrammingProblems,
        SoftwareDevelopment: Development,
        ResearchWork: Security,
        Personal: Personal,
    };

    const component_val = {
      ProgrammingProblems : "Programming Problems",
      SoftwareDevelopment: "Software Development",
      ResearchWork: "Research Work",
      Personal: "Personal",
    };

    return (
        <div>
        <Header/>
        <div className='mt-2 h-auto shadow-lg'>
        <div className="flex flex-col flex-wrap place-content-around pt-2 pb-2">
            {blog_files.map(( cur_blog )=>(
                    <div key={cur_blog} className='m-auto font-mono text-white'>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 
                        font-semibold hover:text-white py-2 px-4 border border-blue-500 
                        hover:border-transparent rounded w-fit mt-1" onClick={()=>{setBlog(cur_blog.split(' ').join(""));setShowModal(true);}}>{cur_blog}</button>
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
                    Selected Blog - {component_val[blog]}
                  </p>
                  {/* <p className='text-slate-500 text-sm leading-relaxed'>click the expand arrow to read/close</p> */}
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
        {/* <Collapsible trigger={<p className="w-fit h-auto mx-auto text-center py-1 px-3 hover:bg-blue-200 rounded " >Expand &#8594;</p>}> */}
        
        {(() => {
            const SpecificBlog = components[blog];
            return <SpecificBlog/>
             
        })()}
                                
        {/* </Collapsible> */}

    </div>
    </div>
    );
}