import React, { useEffect, useRef, useState } from "react"
import { Countdown } from 'react-daisyui'

const CountDown = () => {

    const [time, setTime] = useState({
        days: 8,
        hours: 12,
        minutes: 30,
        seconds: 20,
    });

    const timer = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
        // 定时器
        timer.current = setInterval(() => {
            updateCountdown();
        }, 1000);

        // 组件卸载时清除定时器
        return () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        }
    }, [time, timer]);

    const updateCountdown = () => {
        setTime((prevTime) => {
            const { hours, minutes, seconds, days } = prevTime;

            if (hours === 0 && minutes === 0 && seconds === 0 && days == 0) {
                // 倒计时结束
                timer.current && clearInterval(timer.current);
                return { hours: 0, minutes: 0, seconds: 0, days: 0 };
            }

            if (seconds > 0) {
                return { ...prevTime, seconds: seconds - 1, days };
            } else if (minutes > 0) {
                return { hours, minutes: minutes - 1, seconds: 59, days };
            } else if (hours > 0) {
                return { hours: hours - 1, minutes: 59, seconds: 59, days };
            }

            return prevTime;
        });
    };


    return <div className="grid grid-flow-col text-xs gap-1 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
            <Countdown className="font-mono text-sm" value={time.days} />
        </div>
        <div className="flex flex-col p-2 text-xs bg-neutral rounded-md text-neutral-content">
            <Countdown className="font-mono text-sm" value={time.hours} />
        </div>
        <div className="flex flex-col p-2 text-xs bg-neutral rounded-md text-neutral-content">
            <Countdown className="font-mono text-sm" value={time.minutes} />
        </div>
        <div className="flex flex-col p-2 text-xs bg-neutral rounded-md text-neutral-content">
            <Countdown className="font-mono text-sm" value={time.seconds} />
        </div>
    </div>
}

export default CountDown;