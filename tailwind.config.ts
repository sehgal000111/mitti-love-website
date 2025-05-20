
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Simplified sketch theme colors - black & white only
				sketch: {
					light: '#FFFFFF',
					DEFAULT: '#333333',
					dark: '#000000',
					accent: '#555555'
				}
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'lora': ['Lora', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'sketch': {
					'0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
					'10%': { transform: 'translate(-1px, -1px) rotate(-0.5deg)' },
					'20%': { transform: 'translate(-2px, 0px) rotate(0.5deg)' },
					'30%': { transform: 'translate(0px, 1px) rotate(0deg)' },
					'40%': { transform: 'translate(1px, -1px) rotate(0.5deg)' },
					'50%': { transform: 'translate(-1px, 1px) rotate(-0.5deg)' },
					'60%': { transform: 'translate(-2px, 1px) rotate(0deg)' },
					'70%': { transform: 'translate(1px, 1px) rotate(-0.5deg)' },
					'80%': { transform: 'translate(-1px, -1px) rotate(0.5deg)' },
					'90%': { transform: 'translate(1px, 1px) rotate(0deg)' },
					'100%': { transform: 'translate(1px, -1px) rotate(-0.5deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'sketch-hover': 'sketch 0.5s ease-in-out'
			},
			backgroundImage: {
				'clay-texture': "url('/images/clay-texture.jpg')",
				'sketch-texture': "url('/images/sketch-texture.png')",
				'paper-texture': "url('/images/paper-texture.jpg')",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
