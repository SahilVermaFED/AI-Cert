/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-linear':
                    'linear-gradient(hsl(54, 100%, 95%), hsl(51, 100%, 90%), hsl(48, 100%, 85%), hsl(45, 100%, 80%), hsl(42, 100%, 75%), hsl(39, 100%, 70%), hsl(36, 100%, 65%), hsl(33, 100%, 60%), hsl(30, 100%, 55%), hsl(27, 100%, 50%))',
                'scroll-gradient': 'linear-gradient(90deg, #FFEB3B 0%, #FFF176 100%)'
            },
            colors: {
                golden: '#CFA935'
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif']
            }
        }
    },
    plugins: []
};
