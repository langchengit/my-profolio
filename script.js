// ==================== PAGE NAVIGATION ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const ctaButton = document.querySelector('.cta-button');

    // Navigate to page
    function navigateTo(pageId) {
        // Remove active class from all pages and links
        pages.forEach(page => page.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to selected page and link
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update nav link active state
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Close mobile menu
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        // Scroll to top of page
        document.querySelector('.page-container').scrollTop = 0;
    }

    // Add click listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            navigateTo(pageId);
        });
    });

    // CTA Button - navigate to projects
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            navigateTo('projects');
        });
    }

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Initialize with home page
    navigateTo('home');
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that should animate
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll(
        '.stat-card, .project-card, .skill-category'
    );
    animateElements.forEach(el => {
        el.style.animation = 'fadeInUp 0.6s ease-out forwards';
        el.style.opacity = '0';
    });
});

// ==================== SMOOTH SCROLL BEHAVIOR ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.startsWith('#home') && 
            !href.startsWith('#about') && !href.startsWith('#projects') && 
            !href.startsWith('#skills') && !href.startsWith('#contact')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==================== SKILL BARS ANIMATION ==================== 
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = window.getComputedStyle(entry.target).width;
            entry.target.style.animation = 'none';
            setTimeout(() => {
                entry.target.style.animation = 'expandWidth 1.2s ease-out forwards';
            }, 50);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ==================== FORM SUBMISSION ==================== 
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (name && email && message) {
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-button');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Message Sent! ✓';
            submitBtn.disabled = true;

            // Reset form
            this.reset();

            // Restore button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        } else {
            alert('Please fill in all fields');
        }
    });
}

// ==================== PARALLAX EFFECT ==================== 
const pageContainerParallax = document.querySelector('.page-container');
if (pageContainerParallax) {
    pageContainerParallax.addEventListener('scroll', function() {
        const scrolled = pageContainerParallax.scrollTop;
        const floatingBoxes = document.querySelectorAll('.floating-box');
        floatingBoxes.forEach((box, index) => {
            box.style.transform = `translateY(${scrolled * (0.3 + index * 0.1)}px)`;
        });
    });
}

// ==================== MOUSE CURSOR EFFECT ==================== 
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards !important;
    }
`;
document.head.appendChild(style);

// ==================== ADD STAGGER EFFECT TO CARDS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ==================== RESPONSIVE ANIMATIONS ==================== 
// Disable animations on mobile devices for better performance
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) {
    const allAnimations = document.querySelectorAll('[style*="animation"]');
    allAnimations.forEach(el => {
        el.style.animation = 'none';
    });
}

// ==================== PAGE TRANSITION LOGGING ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            console.log(`Navigated to: ${page}`);
        });
    });
});

// ==================== DYNAMIC SKILL ANIMATION ==================== 
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Re-animate skills when viewing skills page
document.addEventListener('DOMContentLoaded', function() {
    const skillsLink = document.querySelector('[data-page="skills"]');
    if (skillsLink) {
        skillsLink.addEventListener('click', function() {
            setTimeout(animateSkillBars, 300);
        });
    }
});

// ==================== ACTIVE PAGE DETECTION ==================== 
window.addEventListener('load', function() {
    const hash = window.location.hash.slice(1) || 'home';
    const pageLink = document.querySelector(`[data-page="${hash}"]`);
    if (pageLink) {
        pageLink.click();
    }
});

// ==================== KEYBOARD NAVIGATION ==================== 
document.addEventListener('keydown', function(e) {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentIndex = Array.from(navLinks).findIndex(link => 
        link.classList.contains('active')
    );

    if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % navLinks.length;
        navLinks[nextIndex].click();
    } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        navLinks[prevIndex].click();
    }
});

// ==================== SCROLL INDICATOR ==================== 
const pageContainerScroll = document.querySelector('.page-container');
if (pageContainerScroll) {
    pageContainerScroll.addEventListener('scroll', function() {
        const scrollPercentage = (pageContainerScroll.scrollTop / 
            (pageContainerScroll.scrollHeight - pageContainerScroll.clientHeight)) * 100;
        // Could be used for a progress indicator
    });
}

// ==================== ENHANCE LINK HOVER EFFECTS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
