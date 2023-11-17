import { useEffect } from 'react';

export default function Index({ }) {
    function handleResize() {
        let vh = window.innerHeight * 0.01;
        document.body.style.setProperty('--vh', `${vh}px`);
    }

    useEffect(() => {
        handleResize();
        
        // Add the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // RETURN 
    return null; // This component doesn't render anything
}


