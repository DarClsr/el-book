import React from "react"


interface CardProps {
    title?: string
}

const Book: React.FC<CardProps> = ({ }) => {
    return <li classNameName="py-3 my-2">
        <a href="#" className="w-full flex  w-full items-stretch bg-white border border-gray-200 rounded-lg shadow flex-row  d-block hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className=" w-[300px]">
                <img className="object-cover h-full  rounded-t-lg h-full md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <span className="mb-2 text-sm  font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</span>
                <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
    </li>
}

export default Book;