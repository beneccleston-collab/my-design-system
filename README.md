# Design System Foundations

A clean, minimal design system built on fresh mint green and warm neutrals, with support for both light and dark modes.

## Overview

This design system provides a foundational set of design tokens and guidelines for building consistent, beautiful interfaces. It's built with a "refined systematist" approach—balancing minimalism with thoughtful craft.

## Features

- ✨ **Fresh mint primary color** (#88C7A5) with supporting palette
- 🌓 **Light and dark mode** support with automatic theme switching
- 📐 **Systematic spacing** based on 4px grid
- 🔤 **Plus Jakarta Sans** typography with clear hierarchy
- 🎨 **Comprehensive color system** with semantic tokens
- 📦 **Reusable design tokens** via CSS custom properties

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser to view the foundations showcase
3. Use the theme toggle (top right) to switch between light and dark modes

## Design Tokens

All design tokens are defined as CSS custom properties (variables) in `styles.css` and adapt automatically to light/dark mode.

### Colors

```css
/* Primary */
--color-primary: #88C7A5
--color-primary-light: #A8D7BF
--color-primary-dark: #6BAA88

/* Neutrals (adaptive) */
--color-gray-50 through --color-gray-900

/* Semantic */
--color-background
--color-surface
--color-text-primary
--color-text-secondary
```

### Typography

**Font Family:** Plus Jakarta Sans (loaded from Google Fonts)

**Scale:**
- Display: 48px
- H1: 40px
- H2: 32px
- H3: 24px
- H4: 20px
- H5: 18px
- H6: 16px
- Body: 16px
- Small: 14px
- Caption: 12px

**Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Spacing

Based on a 4px unit:

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
--space-24: 96px
```

### Border Radius

```css
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px
```

### Shadows

```css
--shadow-sm: Subtle lift
--shadow-md: Cards, dropdowns
--shadow-lg: Modals, popovers
--shadow-xl: Floating elements
```

## Using the Design System

### In HTML

Simply link to `styles.css` and use the CSS variables:

```html
<link rel="stylesheet" href="styles.css">

<button style="
  background-color: var(--color-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
">
  Click me
</button>
```

### Theme Switching

The system includes a built-in theme toggle that:
- Switches between light and dark modes
- Saves user preference to localStorage
- Applies smooth transitions between themes

```javascript
// Check current theme
const theme = document.documentElement.getAttribute('data-theme');

// Set theme
document.documentElement.setAttribute('data-theme', 'dark');
```

## File Structure

```
my-design-system/
├── index.html      # Foundations showcase
├── styles.css      # All design tokens and styles
└── README.md       # This file
```

## Design Philosophy

This system is built on the principle of **refined minimalism**:
- Clean, professional aesthetic
- Thoughtful use of space and hierarchy
- Subtle, purposeful details
- Accessible and readable typography
- Consistent, predictable patterns

## Roadmap

Future additions:
- [ ] Component library (buttons, inputs, cards, etc.)
- [ ] Interactive examples
- [ ] Design system documentation site
- [ ] Figma design tokens export

## Contributing

This is a learning project exploring AI-assisted design system development. Feel free to fork and adapt for your own use!

## License

Free to use for personal and commercial projects.

---

Built with fresh mint and good vibes 🌿
