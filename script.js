document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listeners for menu button and sidebar links
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', showsidebar);
    }

    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('onclick').match(/scrollToSection\('([^']+)'\)/)[1];
            scrollToSection(targetId);
        });
    });
});

function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    window.addEventListener('scroll', autoCloseSidebar);
}

function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    window.removeEventListener('scroll', autoCloseSidebar);
}

function autoCloseSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'flex') {
        hidesidebar();
    }
}

function scrollToSection(containerId) {
    const targetElement = document.getElementById(containerId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        hidesidebar();
    }
}
