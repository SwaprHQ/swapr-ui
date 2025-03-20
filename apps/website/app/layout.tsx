import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import "@swapr/ui/styles.css";
import "./global.css";

import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Swapr UI",
  description: "Components to build apps fast and clean",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={"bg-surface-surface-0"}>
        <Providers
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
