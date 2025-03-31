'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import DataPages from '@/lib/DataPages';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img src="/images/logo.png" alt="HLS Tournament" />
                    <span>HLS Tournament</span>
                </Link>

                <nav className={styles.nav}>
                    {DataPages.map((page) => (
                        <Link
                            key={page.slug}
                            href={page.slug ? `/${page.slug}` : '/'}
                            className={pathname === (page.slug ? `/${page.slug}` : '/') ? styles.active : ''}
                        >
                            {page.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}