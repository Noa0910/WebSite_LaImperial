module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Asegúrate de que PurgeCSS esté configurado para eliminar CSS no utilizado
    process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.js', './src/**/*.jsx']
    }),
  ],
};
