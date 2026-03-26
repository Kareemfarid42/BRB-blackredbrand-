import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BLACK RED — The Drop",
    description:
        "Limited streetwear collection. Heavy, premium, and made for those who refuse average.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-black text-white antialiased">{children}</body>
        </html>
    );
}
