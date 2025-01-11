// tailwind.config.js
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Tailwind will scan these files for classes
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#ADD8E6', // You can adjust the hex code to your preferred light blue
      },
    },
  },
  plugins: [],
}