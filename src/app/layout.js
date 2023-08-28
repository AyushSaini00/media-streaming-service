import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "../context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Media streaming",
  description: "a simple media streaming app built with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <Header />
          <main className="p-4">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
