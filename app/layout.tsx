import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Regolith',
    description: 'A TypeScript and JavaScript library immune to Regular Expression Denial of Service (ReDoS) attacks by using Rust and linear RegEx under the hood. ',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="si2j4vl">
            <head>
                {/* Production */}
                <Script
                    type="module"
                    src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/preload/dist/index.js"
                />
                {/* Development */}
                {/* <Script type="module" src={`http://localhost:8083/?${Math.random()}`} /> */}
            </head>
            <body className={inter.className} data-oid="mwz9mme">
                {children}
            </body>
        </html>
    );
}
