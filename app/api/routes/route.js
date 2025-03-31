'use client';

import { NextResponse } from 'next/server';
import DataPages from '@/lib/DataPages';

export async function GET() {
    const routes = DataPages.map(page => ({
        path: page.slug ? `/${page.slug}` : '/',
        title: page.title
    }));

    return NextResponse.json({ routes });
}