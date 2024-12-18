import React from "react"
import { useRoutes } from "react-router-dom"
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Search from "../pages/Search";
import Ranking from "../pages/Ranking";
import BookList from "../pages/BookList";


 const Router= React.memo(() => {
    const element = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path:"/catgories",
            element:<Categories />
        },
        {
            path:"/search",
            element:<Search/>
        },
        {
            path:"/ranking",
            element:<Ranking/>
        },
        {
            path:"/bookList",
            element:<BookList />
        }
    ])

    return element;
});


export default Router;