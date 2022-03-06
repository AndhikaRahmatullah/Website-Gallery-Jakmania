module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      spacing: {
        13: '3.25 rem',
      },
      fontFamily: {
        redressed: ['Redressed'],
        serifpro: ['Source Serif Pro'],
        lora: ['Lora']
      },
      dropShadow: {
        '3xl': ['0 35px 35px rgba(0, 0, 0, 0.25)'],
        '4xl': ['20px 20px 5px rgba(0, 0, 0, 0.15)']
      },
      rotate: {
        '360': ['360deg'],
      },
    },
    plugins: [
      require("tw-elements/dist/plugin")
    ]
  },
}