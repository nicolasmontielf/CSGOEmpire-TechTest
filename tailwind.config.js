const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{vue,js}",
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
        screens: {
            sm: '640px',
            md: '700px',
            lg: '1000px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                'sans': ['"Open Sans"', '"sans-serif"', ...defaultTheme.fontFamily.sans],
            }
        },
    },
    plugins: [],
}