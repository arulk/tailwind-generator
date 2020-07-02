
  // tailwind.config.js
module.exports = {
  purge: {
    // When this flag is enabled to true. We will get purged tailwind.css file with only styles used in files defined
    // in content list.
    enabled:  false, 
    content: [
      './templates/**/*.html'
      // './src/**/*.html',
      // './src/**/*.vue',
      // './src/**/*.jsx',
    ]
  },

  theme: {

  },

  variants: {

  },
  
  plugins: [
    require('@tailwindcss/ui')
  ],
}