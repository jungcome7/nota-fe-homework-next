import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,

  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  outdir: 'styled-system',

  jsxFramework: 'react',

  theme: {
    extend: {
      keyframes: {
        'dot-blink': {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
          },
          '40%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
});
