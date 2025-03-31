'use client';

import { useEffect, useState } from 'react';
import DataPages from '@/lib/DataPages';

export default function RoutesList() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        const allRoutes = DataPages.map(page => ({
            path: page.slug ? `/${page.slug}` : '/',
            title: page.title
        }));
        setRoutes(allRoutes);
    }, []);

    return (
        <div>
            <h2>Available Routes:</h2>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <a href={route.path}>{route.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}