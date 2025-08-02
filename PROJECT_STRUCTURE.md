# Linkard Algorithm HQ - Project Structure

This document outlines the complete file structure of the Linkard Algorithm HQ project, a modern React/TypeScript web application built with Vite, Tailwind CSS, and shadcn/ui components.

## Root Directory Structure

```
Linkard_Algorithem-HQ/
├── .gitignore                 # Git ignore rules
├── bun.lockb                  # Bun package manager lock file
├── components.json            # shadcn/ui components configuration
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML entry point
├── package-lock.json         # npm lock file
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Project documentation
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.app.json         # TypeScript config for app
├── tsconfig.json             # Main TypeScript configuration
├── tsconfig.node.json        # TypeScript config for Node.js
├── vite.config.ts            # Vite build tool configuration
├── public/                   # Static assets
├── src/                      # Source code
```

## Public Directory (`public/`)

```
public/
├── placeholder.svg           # Placeholder image
└── robots.txt               # SEO robots file
```

## Source Directory (`src/`)

```
src/
├── App.css                   # Main application styles
├── App.tsx                   # Root React component
├── index.css                 # Global styles and Tailwind imports
├── main.tsx                  # Application entry point
├── vite-env.d.ts            # Vite environment type definitions
├── assets/                   # Static assets (images, etc.)
├── components/               # React components
├── hooks/                    # Custom React hooks
├── lib/                      # Utility libraries
└── pages/                    # Page components
```

### Assets Directory (`src/assets/`)

```
assets/
├── hero-bg.jpg              # Hero section background image
├── testimonial-1.jpg        # First testimonial image
├── testimonial-2.jpg        # Second testimonial image
└── testimonial-3.jpg        # Third testimonial image
```

### Components Directory (`src/components/`)

```
components/
├── CTABanner.tsx            # Call-to-action banner component
├── FeatureGrid.tsx          # Features grid display component
├── Footer.tsx               # Website footer component
├── HeroSection.tsx          # Hero section component
├── PricingSection.tsx       # Pricing display component
├── TestimonialCarousel.tsx  # Customer testimonials carousel
└── ui/                      # shadcn/ui component library
```

### UI Components Directory (`src/components/ui/`)

```
ui/
├── accordion.tsx            # Collapsible content sections
├── alert-dialog.tsx         # Modal alert dialogs
├── alert.tsx                # Alert notifications
├── aspect-ratio.tsx         # Aspect ratio container
├── avatar.tsx               # User avatar component
├── badge.tsx                # Status badges
├── breadcrumb.tsx           # Navigation breadcrumbs
├── button.tsx               # Button component
├── calendar.tsx             # Date picker calendar
├── card.tsx                 # Card container component
├── carousel.tsx             # Image/content carousel
├── chart.tsx                # Data visualization charts
├── checkbox.tsx             # Checkbox input
├── collapsible.tsx          # Collapsible content
├── command.tsx              # Command palette
├── context-menu.tsx         # Right-click context menu
├── dialog.tsx               # Modal dialogs
├── drawer.tsx               # Slide-out drawer
├── dropdown-menu.tsx        # Dropdown menu
├── form.tsx                 # Form components
├── hover-card.tsx           # Hover information cards
├── input-otp.tsx            # OTP input field
├── input.tsx                # Text input field
├── label.tsx                # Form labels
├── menubar.tsx              # Menu bar navigation
├── navigation-menu.tsx      # Navigation menu
├── pagination.tsx           # Page navigation
├── popover.tsx              # Popover content
├── progress.tsx             # Progress indicators
├── radio-group.tsx          # Radio button groups
├── resizable.tsx            # Resizable panels
├── scroll-area.tsx          # Custom scrollable areas
├── select.tsx               # Select dropdown
├── separator.tsx            # Visual separators
├── sheet.tsx                # Side sheet/panel
├── sidebar.tsx              # Sidebar navigation
├── skeleton.tsx             # Loading skeletons
├── slider.tsx               # Range slider input
├── sonner.tsx               # Toast notifications (Sonner)
├── switch.tsx               # Toggle switch
├── table.tsx                # Data tables
├── tabs.tsx                 # Tab navigation
├── textarea.tsx             # Multi-line text input
├── toast.tsx                # Toast notification
├── toaster.tsx              # Toast container
├── toggle-group.tsx         # Toggle button groups
├── toggle.tsx               # Toggle button
├── tooltip.tsx              # Hover tooltips
└── use-toast.ts             # Toast hook utilities
```

### Hooks Directory (`src/hooks/`)

```
hooks/
├── use-mobile.tsx           # Mobile device detection hook
└── use-toast.ts             # Toast notification hook
```

### Library Directory (`src/lib/`)

```
lib/
└── utils.ts                 # Utility functions (cn, etc.)
```

### Pages Directory (`src/pages/`)

```
pages/
├── Index.tsx                # Home/landing page
└── NotFound.tsx             # 404 error page
```

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: npm (with Bun lock file present)
- **Linting**: ESLint
- **CSS Processing**: PostCSS

## Project Type

This appears to be a **landing page/marketing website** for "Linkard Algorithm HQ" with the following features:
- Hero section with background image
- Feature grid display
- Pricing section
- Customer testimonials carousel
- Call-to-action banner
- Responsive design with mobile support
- Modern UI components from shadcn/ui library

## Key Configuration Files

- `vite.config.ts` - Vite bundler configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `components.json` - shadcn/ui component configuration
- `tsconfig.json` - TypeScript compiler settings
- `eslint.config.js` - Code linting rules
- `package.json` - Dependencies and build scripts