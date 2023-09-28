/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'main':'#1a1520',
			'activate': '#79b73d',
			'white':'#ffffff',
			'not-activate': '#d4d4d4',
			'border-color': '#262626'
		},
		extend: {},
	},
	plugins: [],
}
