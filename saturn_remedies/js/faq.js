// js/faq.js

function initFAQ() {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const button = item.querySelector('.faq-button');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        const iconText = item.querySelector('.icon-text');

        if(!button) return;

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Close all others
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherButton = otherItem.querySelector('.faq-button');
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    const otherIconText = otherItem.querySelector('.icon-text');

                    if(otherButton) otherButton.setAttribute('aria-expanded', 'false');
                    
                    if(otherContent) {
                        otherContent.style.maxHeight = null;
                    }
                    
                    // Reset styling
                    otherItem.classList.remove('border-[#E86B35]');
                    otherItem.classList.remove('border-l-[#E86B35]');
                    otherItem.classList.add('border-gray-200');
                    otherItem.classList.add('border-l-transparent');

                    if(otherIcon) {
                        otherIcon.classList.remove('bg-[#CB431E]', 'text-white');
                        otherIcon.classList.add('bg-[#FFF0E5]', 'text-[#E86B35]');
                    }
                    
                    if(otherIconText) {
                        otherIconText.textContent = '+';
                    }
                }
            });

            // Toggle current
            const newState = !isExpanded;
            button.setAttribute('aria-expanded', newState ? 'true' : 'false');

            if (newState) {
                // Open
                content.style.maxHeight = content.scrollHeight + "px";
                
                // Add active styles
                item.classList.add('border-[#E86B35]');
                item.classList.add('border-l-[#E86B35]');
                item.classList.remove('border-gray-200');
                item.classList.remove('border-l-transparent');

                if(icon) {
                    icon.classList.add('bg-[#CB431E]', 'text-white');
                    icon.classList.remove('bg-[#FFF0E5]', 'text-[#E86B35]');
                }
                
                if(iconText) {
                    iconText.textContent = '-';
                }
            } else {
                // Close
                content.style.maxHeight = null;
                
                // Remove active styles
                item.classList.remove('border-[#E86B35]');
                item.classList.remove('border-l-[#E86B35]');
                item.classList.add('border-gray-200');
                item.classList.add('border-l-transparent');

                if(icon) {
                    icon.classList.remove('bg-[#CB431E]', 'text-white');
                    icon.classList.add('bg-[#FFF0E5]', 'text-[#E86B35]');
                }
                
                if(iconText) {
                    iconText.textContent = '+';
                }
            }
        });
    });
}
