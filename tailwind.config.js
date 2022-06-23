module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['PT Serif', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
