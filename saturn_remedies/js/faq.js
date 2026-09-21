// js/faq.js

export function initFAQ() {
    const accordionButtons = document.querySelectorAll('.faq-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Close all others
            accordionButtons.forEach(otherBtn => {
                if (otherBtn !== button) {
                    otherBtn.setAttribute('aria-expanded', 'false');
                    const otherIcon = otherBtn.querySelector('.faq-icon');
                    if (otherIcon) {
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // Toggle current
            button.setAttribute('aria-expanded', !isExpanded);
            const icon = button.querySelector('.faq-icon');
            if (icon) {
                icon.style.transform = !isExpanded ? 'rotate(45deg)' : 'rotate(0deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
    });
}
