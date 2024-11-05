import React, { useState } from 'react';
import './index.scss'; // 把样式代码放到单独的 CSS 文件中
import { IconHome, IconMessage, IconPlane, IconSettings, IconUserBitcoin } from '@tabler/icons-react';

function BottomNavigation() {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { icon: <IconHome/>, label: 'Home' },
        { icon: <IconPlane/>, label: 'Planet' },
        { icon: <IconMessage />, label: 'Message' },
        { icon: <IconUserBitcoin />, label: 'Profile' },
        { icon: <IconSettings />, label: 'Settings' }
    ];

    return (
        <div className="navigation">
            <ul>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => setActiveIndex(index)}
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
                        transform: `translateX(calc(70px * ${activeIndex}))`
                    }}
                ></div>
            </ul>
        </div>
    );
}

export default BottomNavigation;
