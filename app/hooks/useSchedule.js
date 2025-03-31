"use client"
import { useState, useEffect, useMemo } from 'react';

export function useSchedule() {
    const [day, setDay] = useState({
        number: 1,
        date: [
            '(17<sup>th</sup> NOV)',
            '(18<sup>th</sup> NOV)',
            '(25<sup>th</sup> NOV)'
        ]
    });

    const [transition, setTransition] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleTransition = useMemo(() => () => {
        setTransition(true);
        setTimeout(() => {
            setTransition(false);
        }, 1100);
    }, []);

    useEffect(() => {
        let timeoutId;
        const updateDay = () => {
            if (isUpdating) return;

            setIsUpdating(true);
            handleTransition();

            // Đợi transition hoàn thành trước khi cập nhật day
            setTimeout(() => {
                setDay(prevDay => ({
                    ...prevDay,
                    number: prevDay.number === 4 ? 1 : prevDay.number + 1
                }));
                setIsUpdating(false);

                // Lên lịch cho lần cập nhật tiếp theo
                timeoutId = setTimeout(updateDay, 10000);
            }, 1100);
        };

        // Bắt đầu chu kỳ cập nhật
        timeoutId = setTimeout(updateDay, 10000);

        // Cleanup function
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [handleTransition, isUpdating]);

    return { day, setDay, transition };
}