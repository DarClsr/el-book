import React from "react";
import { IconBook, IconSearch } from '@tabler/icons-react';
import { Link } from "react-router-dom";
const Header: React.FC = () => {
    return <div className="header px-2 h-[50px] shadow-xl flex justify-between items-center">
        <div className="left">
            标题
        </div>
        <div className="flex">
            <Link to="/search" className="mx-2" >
                <IconSearch />
            </Link>
            <Link to="/booklist" className="mx-2" >
                <IconBook />
            </Link>
        </div>
    </div>
}

export default Header;