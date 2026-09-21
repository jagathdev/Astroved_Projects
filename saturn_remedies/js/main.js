// js/main.js

import { initCampaign } from './campaign.js';
import { initFAQ } from './faq.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initCampaign();
    initFAQ();
    initAnimations();
});
