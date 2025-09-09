import { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "춤추는망고의 블로그",
  description: "컴퓨터처럼 생각하고, 말하듯 코딩하기",
};

const Layout = ({ children }: Readonly<LayoutProps>) => (
  <Suspense>
    <html {...{ lang: "ko" }}>
      <body {...{ children }} />
    </html>
  </Suspense>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
