import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-sky-400 h-20 py-5 shadow-black shadow-md">
          <h1 className="text-3xl px-5 font-bold drop-shadow-[2px_3px_1px_rgba(255,255,255,1)]">Saranya Mokarala</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute top-5 right-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </header>
        {children}
        <footer className="bg-sky-400 flex flex-wrap justify-around">
          <div>
            <h3 className="font-bold text-lg">Quick Links:</h3>
            <a href="./">Home</a><br></br>
            <a href="./About">About</a><br></br>
            <a href="./Portfolio">Portfolio</a>
          </div>
          <div>
            <h3 className="font-bold text-lg">Contact:</h3>
            <a>Email: mslv.saranya@gmail.com</a><br></br>
            <a href="www.linkedin.com/in/saranya-mokarala">LinkedIn</a><br></br>
            <a href="https://github.com/SaranyaMokarala">GitHub</a>
          </div>
        </footer>
        </body>
    </html>
  );
}