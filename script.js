document.addEventListener('DOMContentLoaded', function() {
    // Select the mobile navigation toggle button
    const navToggle = document.querySelector('.mobile-nav-toggle');
    // Select the primary navigation element
    const primaryNav = document.getElementById('primary-navigation');
    
    // Add click event listener to the toggle button
    navToggle.addEventListener('click', function() {
        // Check if the navigation is currently visible
        const isVisible = primaryNav.getAttribute('data-visible') === 'true';
        
        // Toggle the visibility state
        primaryNav.setAttribute('data-visible', !isVisible);
        
        // Update the aria-expanded attribute for accessibility
        navToggle.setAttribute('aria-expanded', !isVisible);
    });
});