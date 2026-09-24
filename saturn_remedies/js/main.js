// js/main.js

function initFAQ() {
    const faqButtons = document.querySelectorAll('.faq-button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Close all
            faqButtons.forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                const icon = btn.querySelector('.icon-text');
                if(icon) icon.textContent = '+';
                
                // Remove border color from parent
                const parent = btn.closest('.faq-item');
                if(parent) {
                    parent.classList.remove('border-l-[#E86B35]');
                    parent.classList.add('border-l-transparent');
                }
            });
            
            // If it wasn't expanded before, open it
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                const icon = button.querySelector('.icon-text');
                if(icon) icon.textContent = '-';
                
                // Add border color to parent
                const parent = button.closest('.faq-item');
                if(parent) {
                    parent.classList.remove('border-l-transparent');
                    parent.classList.add('border-l-[#E86B35]');
                }
            }
        });
    });
}

function initAnimations() {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve after animating in if we only want it once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initFAQ();
});
