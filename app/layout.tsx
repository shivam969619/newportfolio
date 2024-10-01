import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>shivam's Portfolio Website</title>
        <meta
          name="description"
          content="Welcome to shivam's portfolio website. I am a 3rd year undergraduate with specialized expertise in developing MERN (MongoDB, Express.js, React.js, Node.js) applications and deploying them in the cloud using AWS (Amazon Web Services) tools."
        />
        <meta
          name="keywords"
          content="portfolio, developer, projects, skills, shivam singh makhni, Frontend, Backend, ReactJs, NextJs, web development, software engineer, UI/UX, HTML, CSS, JavaScript, Node.js, MongoDB, Tailwind CSS , API, responsive design"
        />
        <meta name="author" content="shivam Dubey" />
        <meta property="og:title" content="shivam's Portfolio Website" />
        <meta
          property="og:description"
          content="Welcome to shivam's portfolio website.I am a final year undergraduate with specialized expertise in developing MERN (MongoDB, Express.js, React.js, Node.js) applications and deploying them in the cloud using AWS (Amazon Web Services) tools."
        />
        <meta property="og:url" content="https://www.shivam.tech/" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
