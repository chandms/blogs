import Collapsible from 'react-collapsible';
import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { ArrowsExpandIcon} from "@heroicons/react/solid";

export default function Blogs(){

    const markdown_files = ['example1.md', 'example2.md']
    const [post, setPost] = useState('');
    const [mdFile, setMdfile] = useState('');

    useEffect(() => {
        import(`../markdown/${mdFile}`)
          .then(res => {
            fetch(res.default)
              .then(res => res.text())
              .then(res => {setPost(res)})
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      },[mdFile]);

    return (
    <div className='container mt-10'>
        <div className="container flex flex-row flex-wrap place-content-around">
            {markdown_files.map((mdF )=>(
                    <div key={mdF} >
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>{setMdfile(mdF);}}>{mdF}</button>
                    </div>
            ))}
            
        </div>
        <div>
            <Collapsible trigger={<ArrowsExpandIcon className="w-10 h-10 mx-auto text-center hover:bg-indigo-700 rounded " />}>
                                <Markdown>{post}</Markdown>
            </Collapsible>
        </div>
    </div>
    );
}