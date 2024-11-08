import React from "react"


interface BookProps {
    title?: string
    desc?: string
    author?: string
    coverImg?: string,
    layout?: "horizontal" | "vertical";
}

const Book: React.FC<BookProps> = ({ title = "", desc = "", author = "", coverImg = "", layout = "horizontal" }) => {
    return <li className="py-1">
        <a
            href="#"
            className={`w-full flex items-stretch bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 
            dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 
            ${layout === "horizontal" ? "flex-row" : "flex-col"}`}
        >
            <div
                className={`relative overflow-hidden ${layout === "horizontal" ? "w-[100px] h-[150px]" : "w-full h-[100px]"
                    }`}
            >
                <img
                    className={`object-cover w-full absolute ${layout === "horizontal" ? "rounded-s-lg" : "rounded-t-lg"
                        } h-full`}
                    src={coverImg}
                    alt=""
                />
            </div>
            <div
                className={`flex flex-1 flex-col justify-between p-4 leading-normal ${layout === "horizontal" ? "h-[150px]" : "h-auto"
                    }`}
            >
                <p className="text-xs font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis whitespace-nowrap overflow-hidden">
                    {title}
                </p>



                {
                    desc ? <p className="mb-3 mt-2 text-xs h-[100px] font-normal text-ellipsis overflow-hidden text-gray-400">
                        {desc}
                    </p> : ""
                }


            </div>
        </a>
    </li>
}

export default Book;