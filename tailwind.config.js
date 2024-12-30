module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      colors: {
        opacity: "rgba(248, 250, 252, 0.5)",
        primary: "#f8fafc ", // Ligth Winter
        second: "#191BA9", // Blue Vibrant
        third: "#F66B07", // Orange
        fourth: "#fff", // Write
        fifth: "#000", //Black
        hover: "#A8B3FD" 
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        'h1': ['3.625rem', { lineHeight: '5rem', fontWeight: '800' }],
        'h2': ['2.5rem', { lineHeight: '3.5625rem', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
        'h4': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '500' }],
        'h5': ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }]
      },

      boxShadow: {
        'inner-heavy': 'inset 0 2px 10px rgba(0, 0, 0, 0.5)',
      },

      plugins: [],
    },

  }

}