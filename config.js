/* Control center for all Tailwind styling */
/* Key value pairing */
/* snake case */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                pale_green: '#98FB98',
                light_green: '#90EE90',
                green: '#00FF00',
                off_white: '#FFF5EE',
                emerald: '#50C878'
            },
            fontFamily: {
                sans: ['Josefin Sans', 'sans-serif'],
                title: ['Playfair Display SC', 'serif']
            },
            backgroundImage: {
                mobile: "url('img/geometric-shapes-with-faded-gradient.jpg')",
                desktop: "url('img/geometric-shapes-with-faded-gradient.jpg')"
            }
        }
    }
}