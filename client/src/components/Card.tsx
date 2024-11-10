import clsx from "clsx";
import React from "react"


interface CardProps {
    title: string,
    children?: React.ReactNode,
    tlele_slot?: React.ReactNode,
    layout?: "horizontal" | "vertical";
}

const Card: React.FC<CardProps> = ({ title = "",tlele_slot, children, layout = "horizontal" }) => {
    return <div className="w-full  p-1 bg-white border border-gray-200 rounded-lg shadow   ">
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold items-center flex leading-none text-gray-900">
                {title} {
                    tlele_slot
                }
            </h5>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">
                更多
            </a>
        </div>
        <div className={
            clsx({
                "flex-root": true,
                "flex-1": layout === "horizontal",

            })
        }


        >
            <ul role="list"
                className={
                    clsx("divide-y divide-gray-200", {
                        "grid grid-cols-4 gap-1": layout === "vertical"
                    })
                }
            >
                {children}
            </ul>
        </div>
    </div>
}

export default Card;