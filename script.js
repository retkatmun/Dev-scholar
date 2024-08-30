document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});
