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

    // Add Search Functionality
    const searchBox = document.getElementById('search-box');
    const products = document.querySelectorAll('.product-card');

    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();

        // Remove previous highlights
        products.forEach(product => {
            product.classList.remove('matched');
        });

        if (searchTerm === "") {
            // If search box is empty, do not scroll
            return;
        }

        let matched = false;

        for (let product of products) {
            // Retrieve product name from data-name attribute or h3 text
            const productName = product.getAttribute('data-name').toLowerCase() || product.querySelector('h3').textContent.toLowerCase();

            if (productName.includes(searchTerm)) {
                // Highlight the matched product
                product.classList.add('matched');

                // Scroll to the first matched product
                if (!matched) {
                    product.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    matched = true;
                }
            }
        }

        if (!matched) {
            // Optionally, you can display a "No results found" message or handle it as desired
            console.log("No matching products found.");
        }
    });
});
