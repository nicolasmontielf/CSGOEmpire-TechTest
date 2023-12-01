const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'color-title': '#182C62',
            'color-text-table': '#4B5C68',
            'color-page-header': '#025FEB',
            'color-table-main': '#E4EDF2',
            'color-footer': '#F6F7F7',
            'color-table-even': '#F6F7F7',
            ...colors
        },
        extend: {},
    },
    plugins: [],
}