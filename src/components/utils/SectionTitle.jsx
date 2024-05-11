import React from 'react';
import { Colors } from './Colors';

function SectionTitle ({title,dark=null})
{
    return (
        
        <div className="relative p-5 my-10">
            <h2 className={`text-black text-center text-3xl md:text-4xl font-bold ${dark&&"text-white"}`}>
                { title ? title : "Title"}
            </h2>
            <div className={`absolute bottom-0 left-[50%] translate-x-[-50%] bg-[${Colors.light_color}] w-[100px] h-[3px] rounded-full`}></div>
        </div>
    );
}

export default SectionTitle;