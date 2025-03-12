import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "flex items-center justify-center h-fit",
    "select-none font-semibold",
    "disabled:cursor-not-allowed disabled:ring-0 disabled:text-text-base-em",
    "focus-visible:outline-none focus-visible:ring-[3px]",
    "active:ring-[3px]",
  ],
  {
    variants: {
      size: {
        xl: "px-4 h-14 space-x-2 rounded-12 text-lg",
        lg: "px-4 h-12 space-x-2 rounded-12 text-md",
        md: "px-3 h-10 py-2 space-x-2 rounded-12 text-base",
        sm: "px-2 h-8 space-x-[6px] rounded-8 text-sm",
        xs: "px-1.5 h-6 py-1 space-x-1 rounded-6 text-xs",
      },
      variant: {
        primary: [],
        light: [],
        secondary: [],
        tertiary: [],
        neutral: [],
        ghost: ["hover:disabled:bg-transparent_inverse"],
      },
      colorScheme: {
        main: [
          "focus-visible:ring-outline-med-em focus-visible:shadow-focus",
          "active:ring-outline-med-em",
        ],
        danger: [
          "focus-visible:ring-outline-danger-alpha",
          "active:ring-outline-danger-alpha",
        ],
        success: [
          "focus-visible:ring-outline-success-alpha",
          "active:ring-outline-success-alpha",
        ],
      },
      active: {
        true: ["ring-[3px]"],
      },
      width: {
        full: "w-full",
        fit: "w-fit",
        normal: "",
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "light", "secondary", "tertiary", "neutral"],
        class: [
          "disabled:bg-surface-disabled-base-em disabled:shadow-secondary-button",
        ],
      },
      {
        variant: "primary",
        colorScheme: "main",
        class: [
          "bg-surface-primary-med-em text-text-inverse-black-neutral shadow-primary-button",
          "hover:bg-surface-primary-high-em",
          "focus-visible:ring-outline-primary-alpha",
          "active:ring-outline-primary-alpha",
        ],
      },
      {
        variant: "light",
        colorScheme: "main",
        class: [
          "bg-surface-primary-base-em-alpha text-text-primary-high-em shadow-secondary-button",
          "hover:bg-surface-primary-low-em-alpha",
          "focus-visible:ring-outline-primary-alpha",
          "active:ring-outline-primary-alpha",
        ],
      },
      {
        variant: "secondary",
        colorScheme: "main",
        class: [
          "bg-surface-surface-smoke-gray text-text-med-em shadow-secondary-button",
          "hover:bg-surface-smoke-gray-em",
        ],
      },
      {
        variant: "tertiary",
        colorScheme: "main",
        class: [
          "bg-surface-white-smoke-1 border border-outline-base-em text-text-med-em shadow-secondary-button",
          "hover:bg-surface-surface-3",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "main",
        class: ["hover:bg-surface-surface-smoke-gray text-text-med-em"],
      },
      {
        variant: "neutral",
        colorScheme: "main",
        class: [
          "text-text-inverse-black-neutral bg-surface-inverse_white_neutral shadow-primary-button",
          "hover:bg-neutral-inverse-white-alpha-88)",
          "focus-within:shadow-focus-gray",
        ],
      },
      {
        variant: "primary",
        colorScheme: "danger",
        class: [
          "text-text-inverse-black-neutral bg-surface-danger-med-em shadow-primary-button",
          "hover:bg-surface-danger-high-em",
        ],
      },
      {
        variant: "light",
        colorScheme: "danger",
        class: [
          "bg-surface-danger-base-em-alpha text-text-danger-high-em shadow-secondary-button",
          "hover:bg-surface-danger-low-em-alpha",
          "focus-within:shadow-focus-danger",
        ],
      },
      {
        variant: "secondary",
        colorScheme: "danger",
        class: [
          "bg-surface-surface-smoke-gray text-text-danger-high-em shadow-secondary-button",
          "hover:bg-surface-smoke-high",
        ],
      },
      {
        variant: "tertiary",
        colorScheme: "danger",
        class: [
          "text-text-danger-high-em bg-surface-danger-base-em-alpha border border-outline-danger-base-em shadow-secondary-button",
          "hover:bg-surface-danger-low-em-alpha",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "danger",
        class: [
          "text-text-danger-med-em",
          "hover:bg-surface-danger-base-em-alpha text-text-danger-med-em",
        ],
      },
      {
        variant: "primary",
        colorScheme: "success",
        class: [
          "bg-surface-success-med-em text-text-black shadow-primary-button",
          "hover:bg-surface-success-high-em",
        ],
      },
      {
        variant: "light",
        colorScheme: "success",
        class: [
          "bg-surface-success-base-em-alpha text-text-success-high-em shadow-secondary-button",
          "hover:bg-surface-success-low-em-alpha",
          "focus-within:shadow-focus-success",
        ],
      },
      {
        variant: "secondary",
        colorScheme: "success",
        class: [
          "bg-surface-surface-smoke-gray text-text-success-high-em shadow-secondary-button",
          "hover:bg-surface-smoke-high",
        ],
      },
      {
        variant: "tertiary",
        colorScheme: "success",
        class: [
          "text-text-success-high-em bg-surface-success-base-em-alpha border border-outline-success-base-em shadow-secondary-button",
          "hover:bg-surface-success-low-em-alpha",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "success",
        class: [
          "text-text-success-med-em",
          "hover:bg-surface-success-base-em-alpha text-text-success-med-em",
        ],
      },
      {
        colorScheme: "main",
        variant: "primary",
        active: true,
        class: "ring-outline-primary-low-em",
      },
      {
        colorScheme: "main",
        variant: "light",
        active: true,
        class: "ring-outline-med-em",
      },
      {
        colorScheme: "main",
        variant: "secondary",
        active: true,
        class: "ring-outline-med-em",
      },
      {
        colorScheme: "main",
        variant: "tertiary",
        active: true,
        class: "ring-outline-med-em",
      },
      {
        colorScheme: "danger",
        variant: "primary",
        active: true,
        class: "ring-outline-danger-low-em",
      },
      {
        colorScheme: "success",
        variant: "primary",
        active: true,
        class: "ring-outline-success-low-em",
      },
    ],
    defaultVariants: {
      active: false,
      colorScheme: "main",
      variant: "primary",
      size: "md",
      width: "normal",
    },
  }
);
