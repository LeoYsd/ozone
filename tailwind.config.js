/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#FC7785',
      secondary: '#6A67F3',
      tertiary: '#498CDA',
      quaternary: '#74B949',
      quinary: '#332E59',
      primaryHover: '#FF4F5F',
      red: '#DA0060',
    },
    boxShadow: {
      inset: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
      normal: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      medium: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
      extra: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
      tiny: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
      card: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
    },
    lineHeight: {
      md: '50px',
      normal: '32px',
      loose: '40px',
    },
    extend: {},
  },
  plugins: [],
}

