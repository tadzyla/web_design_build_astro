import { defineConfig } from 'astro/config';

export default defineConfig({
	renderers: [],
	vite: {
		ssr: {
			external: ["svgo"],
		},
	},
});
