// use tailwindcss presets with flowbite
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk, sans-serif'],
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        'auto-1fr-auto': 'auto 1fr auto',
        'auto-auto-1fr': 'auto auto 1fr',
        preview: 'repeat(2, 80px)',
      },
      gridTemplateRows: {
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        preview: '80px 80px',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
};
