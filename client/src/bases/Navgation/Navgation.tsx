import React, { useEffect, useRef, useState } from 'react';
import './index.scss'; // 把样式代码放到单独的 CSS 文件中
import { IconCategory, IconHome, IconMessage, IconPlane, IconSettings, IconUserBitcoin } from '@tabler/icons-react';

function BottomNavigation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [diffWidth, setDiffWidth] = useState(0);
    const menuItems = [
        { icon: <IconHome/>, label: '首页' },
        { icon: <IconCategory/>, label: '分类' },
        { icon: <IconMessage />, label: 'Message' },
        { icon: <IconUserBitcoin />, label: 'Profile' },
        { icon: <IconUserBitcoin />, label: '我的' }
    ];
    const navRef = useRef(null);

    useEffect(() => {
        if (navRef.current) {
          // 计算每个导航项的宽度
          const itemWidth = navRef.current.offsetWidth / menuItems.length;
          setDiffWidth((itemWidth-75)/2);
          setIndicatorWidth(itemWidth);
        }
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
                        <a href="#">
                            <span className="icon">
                                {item.icon}  
                            </span>
                            <span className="text">{item.label}</span>
                        </a>
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
