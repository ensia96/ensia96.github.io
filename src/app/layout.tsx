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
      <head>
        <script
          {...{ src: "https://unpkg.com/prettier@3.5.3/standalone.js" }}
        />

        {[
          "acorn",
          "angular",
          "babel",
          "flow",
          "glimmer",
          "graphql",
          "html",
          "markdown",
          "meriyah",
          "postcss",
          "typescript",
          "yaml",
        ].map((plugin) => (
          <script
            key={plugin}
            {...{
              src: `https://unpkg.com/prettier@3.5.3/plugins/${plugin}.js`,
            }}
          />
        ))}
      </head>

      <body {...{ children }} />
    </html>
  </Suspense>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
