'use strict';

/**
 * This script self-require viur-ignite-css
 *
 * It's designed to test the function of the
 * package, but it's also possible to compile
 * VIUR Ignite CSS as clean CSS file
 */

// require-self
const viurCSS = require('.');

// initialization (copy prototype)
viurCSS.init();

// compile less to css
viurCSS.build({
	dest: './css/'
});
