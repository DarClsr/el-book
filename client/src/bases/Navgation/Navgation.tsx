import React, { useEffect, useRef, useState } from 'react';
import './index.scss'; // 把样式代码放到单独的 CSS 文件中
import { IconBookUpload, IconBookmarkFilled, IconCategory, IconHome, IconMessage, IconPlane, IconSettings, IconThumbDownFilled, IconThumbUpFilled, IconUserBitcoin } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

function BottomNavigation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [diffWidth, setDiffWidth] = useState(0);
    const location =useLocation()
    const menuItems = [
        { icon: <IconHome />, label: '首页', path: "/" },
        { icon: <IconCategory />, label: '分类', path: "/catgories" },
        { icon: <IconThumbUpFilled />, label: '精选', path: "/ranking" },
        { icon: <IconBookUpload />, label: '书架', path: "/market" },
        { icon: <IconUserBitcoin />, label: '我的', path: "/profile" }
    ];
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (navRef.current) {
            // 计算每个导航项的宽度
            const itemWidth = navRef.current.offsetWidth / menuItems.length;
            setDiffWidth((itemWidth - 75) / 2);
            setIndicatorWidth(itemWidth);
        }

        const index=menuItems.findIndex(v=>v.path===location.pathname);

        if(index>-1){
            setActiveIndex(index)
        }

        console.log(location)




    }, [menuItems.length]);




    return (
        <div className="navigation" ref={navRef}>
            <ul>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => setActiveIndex(index)}
                        data-index={index}
                    >
                        <Link to={item.path}>
                            <span className="icon">
                                {item.icon}
                            </span>
                            <span className="text">{item.label}</span>
                        </Link>
                    </li>
                ))}
                <div
                    className="indicator"
                    style={{
                        transform: `translateX(calc(${indicatorWidth}px * ${activeIndex} + ${diffWidth}px ))`,
                    }}
                ></div>
            </ul>
        </div>
    );
}

export default BottomNavigation;
