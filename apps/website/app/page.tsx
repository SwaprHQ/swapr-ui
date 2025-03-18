"use client";

import Link from "next/link";
import { Button } from "@swapr/ui";

export default function Home() {
  return (
    <div className="bg-[url('/lines.svg')] h-screen bg-no-repeat bg-cover flex justify-center">
      <div className="pt-48 space-y-6 text-center">
        <h1 className="text-[58px] leading-[64px] font-bold">
          Build apps fast
        </h1>
        <p className="text-lg text-text-med-em">
          A set of components made to help you ship apps faster than ever.
        </p>
        <Link href="/ui" className="block">
          <Button onClick={() => console.log("hey")} className="mx-auto">
            Explore components
          </Button>
        </Link>
      </div>
    </div>
  );
}
