module.exports = {
	extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				//这里写覆盖vue文件的规则
			},
		},
	],
	settings: {
		'import/resolver': {
			alias: {
				map: [['/@', './src']],
				extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
			},
		},
	},
}
