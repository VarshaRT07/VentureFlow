import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sanity/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		screens: {
    			xs: '475px'
    		},
    		colors: {
    			primary: {
    				'100': '#d1ff6b',
    				DEFAULT: '#d1ff6b'
    			},
    			secondary: '#3f3f3f',
    			black: {
    				'100': '#333333',
    				'200': '#141413',
    				'300': '#7D8087',
    				DEFAULT: '#000000'
    			},
    			white: {
    				'100': '#F7F7F7',
    				DEFAULT: '#FFFFFF'
    			}
    		},
    		fontFamily: {
    			'work-sans': [
    				'var(--font-work-sans)'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		boxShadow: {
    			'100': '2px 2px 0px 0px rgb(0, 0, 0)',
    			'200': '2px 2px 0px 2px rgb(0, 0, 0)',
    			'300': '2px 2px 0px 2px rgb(69, 92, 21)'
    		}
    	}
    },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;