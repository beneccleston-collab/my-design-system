// Theme toggle functionality
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

function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleButtons(newTheme);
}

function updateToggleButtons(theme) {
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

// Mobile menu functionality
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

function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
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

// Close menu on window resize if switching to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});
