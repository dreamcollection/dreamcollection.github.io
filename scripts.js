// Function to toggle wishlist icon between filled and empty states
document.querySelectorAll('.wishlist-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fas'); // Filled icon
        icon.classList.toggle('far'); // Empty icon
    });
});

// Example function to handle mobile navigation menu toggle (if you add a mobile menu later)
// This is optional and only needed if you add a menu button for mobile navigation

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-button'); // Example selector for menu button
    const navMenu = document.querySelector('nav ul');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Toggle menu visibility
        });
    }
});
