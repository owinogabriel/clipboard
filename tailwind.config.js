/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    backgroundImage: { // Directly under theme
      'hero-pattern': "url('public/assets/bg-header-desktop.png')",
      // 'footer-texture': "url('https://example.com/img/footer-texture.png')",
      // 'my-image': "url('/assets/my-image.jpg')",
      // 'none': 'none', // Include 'none' if you need to explicitly unset a background image
    },
    // You can still extend other theme values here if needed
    extend: {},
  },
  plugins: [],
}