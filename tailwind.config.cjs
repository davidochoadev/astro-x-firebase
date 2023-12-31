/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'main':'#1a1520',
			'activate': '#fff',
			'white':'#ffffff',
			'not-activate': '#d4d4d4e6',
			'border-color': '#262626',
			'form-not-activate': '#c4c4c4',
			'gold':'#d5b33d'
		},
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/src/images/libreria.webp')",
				'black-pattern': "url('/src/images/green.webp')",
				'dark-pattern': "url('/src/images/dark.webp')"
			 },
			 inset: {
				'center-socials': 'calc(50% - 81px)',
			 },
			 height: {
				'mid': 'calc(100% - 150px)',
				'mid2': 'calc(90vh - 10vh)'
			 },
		},
	},
	plugins: [],
}
