import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Expenses Chart Component",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${dmSans.className} min-h-screen bg-neutral-cream flex justify-center items-center`}
			>
				{children}
			</body>
		</html>
	);
}
