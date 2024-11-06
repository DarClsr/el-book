import React from "react"


interface CardProps {
    title: string,
    children?:React.ReactNode
}

const Card: React.FC<CardProps> = ({ title = "",children, }) => {
    return <div className="w-full  p-2 bg-white border border-gray-200 rounded-lg shadow   ">
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900">
                {title}
            </h5>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">
                更多
            </a>
        </div>
        <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 ">
              {children}
            </ul>
        </div>
    </div>
}

export default Card;