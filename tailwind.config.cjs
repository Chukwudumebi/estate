// use tailwindcss presets with flowbite
module.exports = {
  content: ['./src/**/*.jsx'],
  presets: [require('tailwindcss/defaultConfig.js')],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk, sans-serif'],
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        preview: 'repeat(2, 80px)',
      },
      gridTemplateRows: {
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        preview: '80px 80px',
      },
    },
  },

  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
};
