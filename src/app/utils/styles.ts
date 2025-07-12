// Common styling patterns used throughout the app

export const commonStyles = {
  // Interactive card styles
  interactiveCard: "hover:bg-zinc-800 transition-colors cursor-pointer",

  // Action link styles
  actionLink: "text-blue-400 mt-2",

  // Section header styles
  sectionHeader: "text-xl font-semibold text-white mb-4",

  // Hover transition effects
  hoverTransition: "hover:text-gray-300 transition-colors",

  // Card base styles
  cardBase: "bg-zinc-900 border-gray-800",

  // Button-like link styles
  buttonLink:
    "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200",
} as const;

// Reusable gradient patterns
export const gradients = {
  // Primary gradient (used in buttons and active states)
  primary: "bg-gradient-to-r from-blue-700 to-blue-500",
  primaryHover: "hover:from-blue-800 hover:to-blue-400",
  primaryActive: "active:from-blue-900 active:to-blue-600",

  // Combined primary gradient with all states
  primaryFull:
    "bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-400 active:from-blue-900 active:to-blue-600",
} as const;

// Typography system
export const typography = {
  // Headings
  h1: "text-3xl font-bold text-white",
  h2: "text-xl font-semibold text-white",
  h3: "text-lg font-medium text-white",

  // Body text
  body: "text-white",
  bodySecondary: "text-gray-300",
  bodyMuted: "text-gray-400",

  // Labels & small text
  label: "text-sm font-medium text-gray-400",
  labelWhite: "text-sm font-medium text-gray-300",
  small: "text-sm text-gray-500",
  smallWhite: "text-sm text-white",
} as const;

// Transition patterns
export const transitions = {
  default: "transition-colors",
  all: "transition-all duration-200",
  transform: "transition-transform duration-300 ease-in-out",
} as const;

// Interactive element patterns
export const interactive = {
  // Links
  link: "text-blue-400 hover:text-blue-300 transition-colors",
  linkMuted: "text-gray-300 hover:text-white transition-colors",

  // Hover states
  hoverCard: "hover:bg-zinc-800 transition-colors cursor-pointer",
  hoverButton: "hover:bg-gray-800 hover:text-white transition-colors",
} as const;

// Surface and background patterns
export const surfaces = {
  // Backgrounds
  card: "bg-zinc-900 rounded-lg",
  modal: "bg-zinc-900 rounded-lg",
  sidebar: "bg-zinc-900 border-r border-gray-800",

  // Borders
  border: "border-gray-800",
  borderSubtle: "border-gray-600",
} as const;

// Form element patterns
export const forms = {
  // Input base styles
  input:
    "w-full px-3 py-2 rounded-lg border bg-zinc-800 text-white placeholder-gray-400",
  inputFocus:
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
  inputError: "border-red-500 focus:ring-red-500",
  inputNormal: "border-gray-600 hover:border-gray-500",

  // Combined input styles
  inputBase:
    "w-full px-3 py-2 rounded-lg border transition-colors bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed",

  // Form labels and text
  label: "block text-sm font-medium text-gray-300",
  errorText: "text-sm text-red-400",

  // Button styles
  buttonSecondary:
    "inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors",
} as const;

// Badge patterns
export const badges = {
  base: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-100 text-gray-800",
} as const;

// Utility function to combine classes
export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

// Common responsive grid patterns
export const gridPatterns = {
  stats4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  stats3: "grid grid-cols-1 md:grid-cols-3 gap-6",
  cards2: "grid grid-cols-1 md:grid-cols-2 gap-6",
  single: "grid grid-cols-1 gap-6",
} as const;
