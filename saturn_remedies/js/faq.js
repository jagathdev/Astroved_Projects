// js/faq.js

function initFAQ() {
    const accordionButtons = document.querySelectorAll('.faq-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const iconSpan = button.querySelector('span:last-child');
            const content = button.nextElementSibling;

            // Close all others
            accordionButtons.forEach(otherBtn => {
                if (otherBtn !== button) {
                    otherBtn.setAttribute('aria-expanded', 'false');
                    const otherIconSpan = otherBtn.querySelector('span:last-child');
                    if (otherIconSpan) {
                        otherIconSpan.textContent = '+';
                    }
                    const otherContent = otherBtn.nextElementSibling;
                    if (otherContent) {
                        otherContent.style.maxHeight = null;
                        otherContent.style.paddingTop = null;
                        otherContent.style.paddingBottom = null;
                    }
                }
            });

            // Toggle current
            const newState = !isExpanded;
            button.setAttribute('aria-expanded', newState ? 'true' : 'false');

            if (iconSpan) {
                iconSpan.textContent = newState ? '-' : '+';
            }

            if (content) {
                if (newState) {
                    content.style.maxHeight = content.scrollHeight + 32 + "px"; // +32 for 2rem total padding
                    content.style.paddingTop = "1rem";
                    content.style.paddingBottom = "1rem";
                } else {
                    content.style.maxHeight = null;
                    content.style.paddingTop = null;
                    content.style.paddingBottom = null;
                }
            }
        });
    });
}
