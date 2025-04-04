"use client";

import { useEffect, useState } from "react";
import { Icon } from "@swapr/ui";
import { cx } from "class-variance-authority";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const sections = [
  { id: "about", label: "About" },
  { id: "install", label: "Installation" },
];

const uiSections = [
  { id: "buttons", label: "Buttons" },
  { id: "icon-buttons", label: "Icon Buttons" },
  { id: "modals", label: "Modals" },
  { id: "toasts", label: "Toasts" },
  { id: "chip-buttons", label: "Chip Buttons" },
  { id: "popovers", label: "Popovers" },
  { id: "tooltips", label: "Tooltips" },
  { id: "tabs", label: "Tabs" },
  { id: "toggle-groups", label: "Toggle Groups" },
  { id: "tags", label: "Tags" },
  { id: "inputs", label: "Inputs" },
  { id: "icons", label: "Icons" },
  { id: "logos", label: "Logos" },
  { id: "fonts", label: "Fonts" },
  { id: "shadows", label: "Shadows" },
  { id: "colors", label: "Colors" },
];

const allSections = [...sections, ...uiSections];

export function Sidenav() {
  const [activeSection, setActiveSection] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const savedIsOpen = localStorage.getItem("sidenavOpen");
    if (savedIsOpen !== null) {
      setIsOpen(savedIsOpen === "true");
    }
    const handleScroll = () => {
      for (const section of allSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top <= 100) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Save visibility state when it changes
  useEffect(() => {
    localStorage.setItem("sidenavOpen", isOpen.toString());
  }, [isOpen]);

  // Handle sidenav content click
  const handleSidenavClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <nav
      className={`fixed top-24 z-10 transition-all duration-300 ${
        isOpen
          ? "left-4"
          : `-left-48 md:-left-44 ${isHovered ? "translate-x-8" : ""}`
      } flex`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-48 p-4 bg-surface-primary-base-em rounded-12 shadow-focus-primary cursor-pointer"
        onClick={handleSidenavClick}
      >
        <div className="space-y-5">
          <h2 className="text-text-primary-high-em font-bold text-xs">
            Swapr UI
          </h2>
          <div className="space-y-3">
            <p className="text-text-high-em font-medium text-sm">Theme</p>
            <ThemeSwitch />
          </div>
          <div className="space-y-3">
            <p className="text-text-high-em font-medium text-sm">
              Getting started
            </p>
            <ul className="space-y-2">
              <div>
                {sections.map(section => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={cx(
                        "block px-3 py-2 rounded-6 transition-colors hover:bg-surface-primary-low-em text-sm",
                        activeSection === section.id
                          ? "bg-surface-primary-low-em text-text-primary-high-em"
                          : "text-text-med-em"
                      )}
                      // Stop propagation to prevent the sidenav's onClick from firing when clicking links
                      onClick={e => e.stopPropagation()}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </div>
              <div>
                <p className="text-text-high-em font-medium text-sm mb-2">
                  Components
                </p>
                {uiSections.map(section => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={cx(
                        "block px-3 py-2 rounded-6 transition-colors hover:bg-surface-primary-low-em text-sm",
                        activeSection === section.id
                          ? "bg-surface-primary-low-em text-text-primary-high-em"
                          : "text-text-med-em"
                      )}
                      // Stop propagation to prevent the sidenav's onClick from firing when clicking links
                      onClick={e => e.stopPropagation()}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cx(
          "h-10 px-2 mt-4  md:-ml-5 bg-surface-primary-base-em hover:bg-surface-primary-low-em rounded-12 border-2 border-outline-primary-base-em transition-all",
          isOpen ? "-ml-5" : "-ml-1"
        )}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        <Icon name="sidenav" />
      </button>
    </nav>
  );
}
