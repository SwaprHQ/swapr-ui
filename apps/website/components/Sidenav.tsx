"use client";

import { useEffect, useState } from "react";
import { Icon } from "@swapr/ui";
import { cx } from "class-variance-authority";

const sections = [
  { id: "about", label: "About" },
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

export function Sidenav() {
  const [activeSection, setActiveSection] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedIsOpen = localStorage.getItem("sidenavOpen");
    if (savedIsOpen !== null) {
      setIsOpen(savedIsOpen === "true");
    }
    const handleScroll = () => {
      for (const section of sections) {
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

  return (
    <nav
      className={`fixed top-24 transition-all duration-300 ${isOpen ? "left-4" : "-left-48 md:-left-44"} flex`}
    >
      <div className="w-48 p-4 bg-surface-primary-base-em rounded-12 shadow-focus-primary">
        <h2 className="text-text-high-em font-medium mb-4 text-sm">Sections</h2>
        <ul className="space-y-2">
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block px-3 py-2 rounded-6 transition-colors hover:bg-surface-primary-low-em ${
                  activeSection === section.id
                    ? "bg-surface-primary-low-em text-text-primary-high-em"
                    : "text-text-med-em"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
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
