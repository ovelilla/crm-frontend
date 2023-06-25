import ThemeRegistry from "@/themes/ThemeRegistry";
import { Poppins } from "next/font/google";
import './global.css'

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    style: ["normal", "italic"],
});

export const metadata = {
    title: "Next CRM",
    description: "Next CRM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    );
}
