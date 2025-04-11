import type { Metadata } from "next";

import "@swapr/ui/styles.css";
import "./global.css";

import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Swapr UI - clean UI components for your <app></app>",
  description: "Components to build clean apps fast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-surface-surface-0">
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
