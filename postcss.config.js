module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
        content:[
            './components/**/*.vue',
            './pages/**/*.vue',
            './layouts/**/*.vue'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []

    })
    
  ]
}