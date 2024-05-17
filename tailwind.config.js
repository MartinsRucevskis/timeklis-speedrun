/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue',],
    theme: {
        extend: {
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            },
            colors: {
                primary: {
                    light: '#559183',
                    dark: '#022D2D' // Adjust this for dark theme
                },
                secondary: {
                    light: '#D04848',
                    dark: '#232121' // Adjust this for dark theme
                },
                third: {
                    light: '#FDE767',
                    dark: '#6E642B'
                }
            }
        }
    },
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    },
    plugins: [
        require('@tailwindcss/container-queries'),
    ]
}
