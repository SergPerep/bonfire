import sveltePreprocess from 'svelte-preprocess';
const sassColors = `@use './src/scss/sass-utils/colors.scss';`;
const sassFonts = `@use './src/scss/sass-utils/fonts.scss';`;
const sassVendors = `@use './src/scss/sass-utils/vendors.scss' as *;`;
const sassMedia = `@use './src/scss/sass-utils/include-media.scss' as *;`;
const sassString = sassColors + sassFonts + sassVendors + sassMedia;

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
		scss:{
			prependData: sassString
		}
	})
}
