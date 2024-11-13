document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const themeIcon = document.getElementById('theme-icon');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Check for dark-mode class to set appropriate icon
        if (document.body.classList.contains('dark-mode')) {
            // Set sun icon for light mode
            themeIcon.setAttribute('d', 'M12 4.354a4.5 4.5 0 1 0-5.657 5.657 4.5 4.5 0 0 0 5.657-5.657zM8 4.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z');
            themeIcon.insertAdjacentHTML('beforeend', '<path d="M8 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm6.364-6.364a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0zM2.343 2.343a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0zM14.657 8a.5.5 0 0 1 .5.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm-13 0a.5.5 0 0 1 .5.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm11.314 4.95a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0zM2.343 13.657a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0z"');
        } else {
            // Set moon icon for dark mode
            themeIcon.setAttribute('d', 'M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278');
            themeIcon.insertAdjacentHTML('beforeend', '<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"');
        }
    });
});
