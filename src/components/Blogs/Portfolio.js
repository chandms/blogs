import React from "react";
import { content } from "./data/portfolio";

export default function Portfolio(){
    return (
        <div>
            <p className="h-auto py-2 bg-gradient-to-l from-sky-500 to-indigo-500 m-auto flex justify-around font-mono font-bold text-lg shadow-lg"> Building My Portfolio and Blog App </p>
            <br></br>
            <div className="h-auto py-2 flex justify-around font-serif font-bold text-lg shadow-lg">
            <p> Hey everyone!!, I recently built my portfolio and a blog app, and will be continuing to work on that.
             I wanted to share all the steps involved while building the components and hosting the site.</p>
            </div>
            <div>
                <div className=" flex flex-col flex-wrap ">
                    {
                        content.map((data) => {
                            return (
                                <div key={data.title}>
                                    <a href={data["title-href"]} className="h-auto py-2 flex justify-center underline font-mono text-blue-800 font-bold h-12 bg-sky-200"> {data.title} </a>
                                    <p className="h-auto py-2 flex justify-center bg-yellow-100 font-serif "> {data.description} </p>
                                     {
                                        data["desc-link"].length>0 ? 
                                        <a href={data["desc-link"]} className="px-1 underline text-blue-600 flex justify-center  bg-yellow-100 font-serif"> {data["link-desc"]} </a>
                                        : <p></p>
                                     }
                                    
                                    <br></br>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}