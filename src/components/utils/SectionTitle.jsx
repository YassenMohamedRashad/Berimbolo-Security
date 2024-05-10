import React from 'react';

function SectionTitle ({title})
{
    return (
        
        <div className="relative p-5 my-10">
            <h2 className="text-black text-center text-3xl md:text-4xl font-bold">
                { title ? title : "Title"}
            </h2>
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%] bg-blue-600 w-[100px] h-[3px] rounded-full"></div>
        </div>
    );
}

export default SectionTitle;