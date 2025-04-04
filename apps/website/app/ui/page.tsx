"use client";

import { Sidenav } from "@/components";
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
  HeroSection,
  InstallationSection,
} from "@/app/ui/sections";

export default function UI() {
  return (
    <main className="lg:max-w-screen-lg 2xl:max-w-screen-xl px-5 sm:px-10 lg:px-5 mx-auto my-10 overflow-auto relative">
      <Sidenav />
      <div className="space-y-8 mb-20">
        <HeroSection />
        <InstallationSection />
      </div>
      <section className="my-12">
        <h2 className="text-text-high-em font-bold text-2xl">Components</h2>
        <div className="space-y-12">
          <ButtonSection />
          <IconButtonSection />
          <ChipButtonsSection />
          <ToggleGroupSection />
          <TabsSection />
          <ModalSection />
          <ToastSection />
          <PopoverSection />
          <TooltipSection />
          <TagSection />
          <InputSection />
          <LogoSection />
          <IconSection />
          <FontsizeSection />
          <ShadowSection />
          <ColorsSection />
        </div>
      </section>
    </main>
  );
}
