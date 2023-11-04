/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',

  content: ['./resources/**/*.{edge,js,ts,jsx,tsx,vue}', './node_modules/flowbite/**/*.js'],

  plugins: [require('flowbite/plugin')],

  theme: {
    extend: {
      colors: {
        blue: '#839FBE',
        green: '#4C6B8F',
        grayish: '#E8EDF3',
        black: '#161E27',
      },
    },
    fontFamily: {
      body: [
        'staatliches',
      ],
      sans: [
        'staatliches',
      ],
    },
  }, 
}