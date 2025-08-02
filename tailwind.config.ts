import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				/* Core Brand Colors */
				charcoal: {
					DEFAULT: 'hsl(var(--charcoal))',
					light: 'hsl(var(--charcoal-light))',
					dark: 'hsl(var(--charcoal-dark))',
				},
				teal: {
					DEFAULT: 'hsl(var(--teal))',
					light: 'hsl(var(--teal-light))',
					dark: 'hsl(var(--teal-dark))',
				},
				neon: {
					DEFAULT: 'hsl(var(--neon))',
					glow: 'hsl(var(--neon-glow))',
					bright: 'hsl(var(--neon-bright))',
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					light: 'hsl(var(--warning-light))',
					dark: 'hsl(var(--warning-dark))',
				},

				/* Semantic Tokens */
				border: 'hsl(var(--border))',
				'border-accent': 'hsl(var(--border-accent))',
				input: 'hsl(var(--input))',
				'input-border': 'hsl(var(--input-border))',
				ring: 'hsl(var(--ring))',
				
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
					accent: 'hsl(var(--background-accent))',
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					muted: 'hsl(var(--foreground-muted))',
					secondary: 'hsl(var(--foreground-secondary))',
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))',
				},
				
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-warning': 'var(--gradient-warning)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'accent': 'var(--shadow-accent)',
				'card': 'var(--shadow-card)',
				'intense': 'var(--shadow-intense)',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
