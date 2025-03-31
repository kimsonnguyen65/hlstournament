'use client';

import { useEffect, useCallback } from 'react';

/**
 * ResizeListener component handles mobile viewport height issues by setting a CSS custom property --vh
 * that equals 1% of viewport height. This fixes the common mobile browser issue where 100vh includes
 * the address bar.
 */
export default function ResizeListener() {
    const handleResize = useCallback(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return null;
}