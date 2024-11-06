import React from "react"


interface BookProps {
    title?: string
    desc?: string
    author?: string
    coverImg?: string
}

const Book: React.FC<BookProps> = ({ title="",desc="",author="",coverImg=""}) => {
    return <li className="py-1">
        <a href="#" className="w-full flex  w-full items-stretch bg-white border border-gray-200 rounded-lg shadow flex-row  d-block hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className=" relative overflow-hidden w-[100px] h-[150px]">
                <img className="object-cover w-full absolute  rounded-t-lg h-full md:rounded-none md:rounded-s-lg" src={coverImg} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4 leading-normal h-[150px] overflo-hidden">
                <span className="mb-2 text-sm  font-bold tracking-tight text-gray-900 dark:text-white">{title}</span>
                <p className="mb-3 text-xs font-normal text-ellipsis overflow-hidden text-gray-400 ">{desc}</p>
            </div>
        </a>
    </li>
}

export default Book;