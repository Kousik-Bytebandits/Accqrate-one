import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimatedProps {
    children: React.ReactNode;
    animation?: string;
    duration?: number;
    delay?: number;
    offset?: number;
    once?: boolean;
    className?: string;
}

let aosInitialized = false; // prevent multiple initializations

const FadeUp: React.FC<AnimatedProps> = ({
    children,
    animation = 'fade-up',
    duration = 1000,
    delay = 0,
    offset = 120,
    once = true,
    className = '',
}) => {
    useEffect(() => {
        if (!aosInitialized) {
            AOS.init({
                duration,
                once: false,    // allow repeating animations
                mirror: true,   // animates again when scrolling back up
                offset,         // trigger offset
            });
            aosInitialized = true;
        }
        AOS.refresh();
    }, [duration, offset]);

    return (
        <div
            data-aos={animation}
            data-aos-duration={duration}
            data-aos-delay={delay}
            className={className}
        >
            {children}
        </div>
    );
};

export default FadeUp;
