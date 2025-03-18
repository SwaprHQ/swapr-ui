"use client";

import { ThemeSwitch } from "@/components";
import {
  ButtonSection,
  ButtonLinkSection,
  ChipButtonsSection,
  ColorsSection,
  IconButtonSection,
  TabsSection,
  ToastSection,
  TooltipSection,
  PopoverSection,
  LogoSection,
  ModalSection,
  IconSection,
  ToggleGroupSection,
  TagSection,
  InputSection,
  ShadowSection,
  FontsizeSection,
} from "@/app/ui/sections";

export default function UI() {
  return (
    <main className="max-w-screen-xl px-5 mx-auto my-10 overflow-auto">
      <ThemeSwitch />
      <div className="pb-12 my-12 space-y-12 divide-y divide-surface-surface-smoke-gray-em">
        <div className="space-y-4">
          <h1 className="text-[42px] font-bold mb-8">Swapr UI</h1>
          <div className="max-w-2xl space-y-2">
            <p>
              Create create awesome user interfaces without the hussle of
              rebuild the same component all over again.
            </p>
            <p>
              Inspired by{" "}
              <a
                href="https://atomizedesign.com/"
                className=" text-text-primary-med-em hover:text-text-primary-high-em"
              >
                Atomize Design System
              </a>
            </p>
          </div>
        </div>
        <ButtonSection />
        <IconButtonSection />
        <ModalSection />
        <ToastSection />
        <ChipButtonsSection />
        <PopoverSection />
        <TooltipSection />
        <TabsSection />
        <ToggleGroupSection />
        <TagSection />
        <InputSection />
        <IconSection />
        <LogoSection />
        <FontsizeSection />
        <ShadowSection />
        <ColorsSection />
        <ButtonLinkSection />
      </div>
    </main>
  );
}
