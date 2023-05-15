import {useState, useEffect} from 'react';

const Countdown = () => {
    const [countdown, setCountdown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    const targetDate = new Date('2023-05-30T23:59:59');

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeRemaining = targetDate.getTime() - currentTime;

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setCountdown({days, hours, minutes, seconds});

            if (timeRemaining <= 0){
                clearInterval(interval);
                setCountdown({days: 0, hours: 0, minutes: 0, seconds: 0});
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown">
            <p>{countdown.days} <span>days</span> {countdown.hours} <span>hours</span> {countdown.minutes} <span>minutes</span> {countdown.seconds} <span>seconds left</span></p>
        </div>
    );
}

export default Countdown;