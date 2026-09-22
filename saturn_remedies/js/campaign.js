// js/campaign.js

const campaigns = {
    default: {
        title: "Looking for<br><span class=\"text-[#F5A623]\">Saturn Remedies?</span>",
        description: "Overcome challenges in career, finances, relationships, health and more during Sade Sati, Shani Dasha or other Saturn periods.",
        price: "Starting from ₹108",
        cta: "Explore Shani Remedies →"
    },
    shani: {
        title: "Find Traditional<br><span class=\"text-[#F5A623]\">Saturn Remedies</span>",
        description: "Seek Saturn's blessings during Sade Sati and Shani Dasha for discipline, growth, and balance.",
        price: "Starting from ₹108",
        cta: "Explore Remedies →"
    }
};

function initCampaign() {
    const params = new URLSearchParams(window.location.search);
    const campaignKey = params.get("utm_campaign") || "default";
    
    const config = campaigns[campaignKey] || campaigns.default;
    
    const heroTitle = document.getElementById("hero-title");
    const heroDesc = document.getElementById("hero-desc");
    const heroPrice = document.getElementById("hero-price");
    const heroCta = document.getElementById("hero-cta");

    if (heroTitle) heroTitle.innerHTML = config.title;
    if (heroDesc) heroDesc.textContent = config.description;
    if (heroPrice) heroPrice.textContent = config.price;
    if (heroCta) heroCta.textContent = config.cta;
}
