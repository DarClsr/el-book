import { IconBookmarks, IconCarambola, IconCategory, IconTrendingUp } from "@tabler/icons-react"
import React from "react"
import { Link } from "react-router-dom"


const NavBar: React.FC = () => {


    const menus = [
        {
            title: "排行",
            color: "rgba(239,68,68,1)",
            icon: <IconTrendingUp color="#fff" />,
            path: "/ranking"
        },
        {
            title: "分类",
            color: "rgba(249,115,22,1)",
            icon: <IconCategory color="#fff" />,
            path: "/categories"

        }, {
            title: "完本",
            color: "rgba(236,72,153,1)",
            icon: <IconBookmarks color="#fff" />,
            path: "/wanben"

        }, {
            title: "推荐",
            color: "rgba(249,115,22,1)",
            icon: <IconCarambola color="#fff" />,
            path: "/recommend"

        }
    ]

    return <div className="grid grid-cols-4 gap-4 mt-10">
        {
            menus.map((v, index) => {

                return <Link to={v.path} key={index} >
                    <div className="w-full h-[80px] flex flex-col justify-center items-center">
                        <div className="h-[52px] w-[52px] flex justify-center items-center rounded-full shadow-lg"
                            style={
                                {
                                    background: v.color
                                }
                            }
                        >
                            {v.icon}
                        </div>
                        <span className="font-bold text-sm mt-2">{v.title}</span>
                    </div>
                </Link>
            })
        }
    </div>
}

export default NavBar;