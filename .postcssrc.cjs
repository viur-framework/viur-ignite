const enableBuild = process.env.mode === 'build'

module.exports = ({ ctx }) => ({
	map: enableBuild ? false : 'inline',
	plugins: {
		'postcss-discard-comments': enableBuild ? {} : false,
		'@csstools/postcss-bundler': {},
		'postcss-preset-env': {
			stage: 3,
			minimumVendorImplementations: 2,
			autoprefixer: {},
			debug: true,
			features: {
    			'color-mix': true,
				'nesting-rules': true,
				'oklab-function': true,
                //'cascade-layers': true,
                'custom-media-queries': true,
  			}
		},
		'postcss-focus': {},
		'postcss-sort-media-queries': {},
		'cssnano': enableBuild ? {} : false,
	}
})
