import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Usulas Enterprises",
  description: "Generator, water pumps, lawn mowers, etc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative bg-[url("/SVG/footerPatter.svg")] bg-no-repeat'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
