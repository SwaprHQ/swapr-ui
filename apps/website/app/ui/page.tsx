"use client";

import { ThemeSwitch, Sidenav } from "@/components";
import {
  ButtonSection,
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
    <main className="lg:max-w-screen-lg 2xl:max-w-screen-xl px-5 sm:px-10 lg:px-5 mx-auto my-10 overflow-auto relative">
      <ThemeSwitch />
      <Sidenav />
      <div
        className="pb-12 my-12 space-y-12 divide-y divide-surface-surface-smoke-gray-em"
        id="about"
      >
        <div className="p-10 space-y-4 bg-surface-primary-base-em rounded-12 border border-outline-primary-base-em">
          <h1 className="text-[42px] font-bold mb-8">Swapr UI</h1>
          <div className="flex">
            <div className="bg-surface-primary-high-em size-3"></div>
            <div className="bg-surface-success-med-em size-3"></div>
            <div className="bg-surface-danger-med-em size-3"></div>
            <div className="bg-surface-info-med-em size-3"></div>
          </div>
          <div className="max-w-2xl space-y-2 text-text-med-em">
            <p>
              Create create awesome user interfaces without the hussle of
              rebuild the same component all over again.
            </p>
            <p>
              Inspired by{" "}
              <a
                href="https://atomizedesign.com/"
                className=" text-text-primary-med-em hover:text-text-primary-high-em"
                target="_blank"
              >
                Atomize Design System
              </a>{" "}
              built by{" "}
              <a
                href="https://swaprhq.io/"
                className=" text-text-primary-med-em hover:text-text-primary-high-em"
                target="_blank"
              >
                Swapr
              </a>
            </p>
            <p>
              See it in action on{" "}
              <a
                className="relative text-text-low-em hover:text-text-high-em"
                href="https://presagio.pages.dev/"
                target="_blank"
              >
                👁️ Presagio{" "}
                <div className="absolute top-0 -right-2 size-1.5 rounded-100 bg-surface-success-high-em"></div>
              </a>
            </p>
          </div>
          <div className="flex justify-between w-full">
            <div></div>
            <div className="flex items-center space-x-2">
              <a
                className="hover:underline hover:text-text-primary-high-em bg-surface-surface-white-smoke-2 rounded-12 px-2 py-1 font-medium  text-sm"
                href="https://github.com/SwaprHQ/swapr-ui"
                target="_blank"
              >
                Github
              </a>
              <a
                className="hover:underline hover:text-text-primary-high-em bg-surface-surface-white-smoke-2 rounded-12 px-2 py-1 font-medium  text-sm"
                href="https://www.npmjs.com/package/@swapr/ui"
                target="_blank"
              >
                NPM
              </a>
            </div>
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
      </div>
    </main>
  );
}
