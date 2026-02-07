// Load navigation
async function loadNavigation() {
    try {
        const response = await fetch('nav.html');
        const navHTML = await response.text();
        document.getElementById('nav-placeholder').innerHTML = navHTML;
        
        // Set active states after nav is loaded
        setActiveNavStates();
        
        // Re-initialize mobile menu after nav is loaded
        initializeMobileMenu();
        
        // Re-initialize theme toggle after nav is loaded
        initializeThemeToggle();
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

// Set active navigation states based on current page
function setActiveNavStates() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageBase = currentPage.replace('.html', '');
    
    // Set active main nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const itemPage = item.getAttribute('data-page');
        if (itemPage === pageBase || (pageBase === '' && itemPage === 'index')) {
            item.classList.add('active');
            // Show sub-items for active page
            const subItems = item.parentElement.querySelector('.nav-subitems');
            if (subItems) {
                subItems.classList.add('active');
            }
        }
    });
    
    // Set active sub-item based on hash
    if (window.location.hash) {
        const hash = window.location.hash;
        const subLinks = document.querySelectorAll('.nav-subitems a');
        subLinks.forEach(link => {
            if (link.getAttribute('href').includes(hash)) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const overlay = document.getElementById('overlay');
    
    if (hamburger) {
        hamburger.addEventListener('click', openMenu);
    }
    
    if (closeSidebar) {
        closeSidebar.addEventListener('click', closeMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking a nav link on mobile
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
}

function openMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize theme toggle functionality
function initializeThemeToggle() {
    const html = document.documentElement;
    const desktopThemeToggle = document.getElementById('desktopThemeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateToggleButtons(currentTheme);
    
    // Desktop theme toggle
    if (desktopThemeToggle) {
        desktopThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile theme toggle
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleButtons(newTheme);
}

function updateToggleButtons(theme) {
    const desktopThemeToggle = document.getElementById('desktopThemeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const buttons = [desktopThemeToggle, mobileThemeToggle].filter(Boolean);
    
    buttons.forEach(button => {
        const icon = button.querySelector('.toggle-icon');
        const text = button.querySelector('.toggle-text');
        
        if (icon) {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
        
        if (text) {
            text.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    });
}

// Load navigation when page loads
document.addEventListener('DOMContentLoaded', loadNavigation);

// Close menu on window resize if switching to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});
