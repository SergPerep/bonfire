import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const sassColors = `@use './src/scss/sass-utils/colors.scss';`;
const sassFonts = `@use './src/scss/sass-utils/fonts.scss';`;
const sassVendors = `@use './src/scss/sass-utils/vendors.scss' as *;`;
const sassMedia = `@use './src/scss/sass-utils/include-media.scss' as *;`;
const sassString = sassColors + sassFonts + sassVendors + sassMedia;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss:{
			prependData: sassString
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
