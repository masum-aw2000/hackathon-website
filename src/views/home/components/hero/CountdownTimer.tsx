import {useEffect, useState} from "react";

// prop validation for TimeUnit
interface TimeUnitProps{
    value: number;
    label: string;
}

const TimeUnit = ({value, label}: TimeUnitProps) => (
    <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-primary bg-secondary/10 rounded-lg p-3 min-w-[80px]">
        
        {value.toString().padStart(2, "0")}
        </div>
        <div className="text-sm text-gray-600 mt-2">{label}</div>
    </div>
)

// prop validation for CoundownTimer
interface CountdownTimerProps {
    targetDate?: Date;
    className?: string;
}

const CountdownTimer = ({
    targetDate = new Date('2025-02-28'), // target date of February 28, 2025
    className = "",
}: CountdownTimerProps) =>{
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();

            if (difference > 0){
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60 )) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
            <div className="flex justify-center space-x-4 text-center">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Minutes"/>
                <TimeUnit value={timeLeft.seconds} label="Seconds"/>
            </div>
        </div>
    );
};

export default CountdownTimer;