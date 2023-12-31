"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../component/Layout/Navbar";
import theme from "@/theme";
import Footer from "@/component/Layout/Footer";
import SearchBar from "@/component/Layout/SearchBar";
import { WishlistContextProvider } from "@/context/WishlistContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <WishlistContextProvider>
            <>
              <Navbar />
              <SearchBar />
              {children}
            </>
          </WishlistContextProvider>
          {/* <Footer/> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
