
// IMPORTANT: Replace with your WhatsApp number.
// Example: 212612345678 (no + sign)
const WHATSAPP_NUMBER = "212600000000";

function order(service) {
    sendWhatsApp(`Hello NEXORA DIGITAL! I am interested in: ${service}. Please send me more details.`);
}

function contactUs() {
    sendWhatsApp("Hello NEXORA DIGITAL! I would like to know more about your services.");
}

function sendWhatsApp(message) {
    if (WHATSAPP_NUMBER === "212600000000") {
        alert("Please add your WhatsApp number inside script.js first.");
        return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
});

// Service filters
const filterButtons = document.querySelectorAll(".filter");
const serviceCards = document.querySelectorAll(".service-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        serviceCards.forEach(card => {
            const show = filter === "all" || card.dataset.category === filter;
            card.classList.toggle("hidden", !show);
        });
    });
});

// Multilingual content
const translations = {
    en: {
        navHome: "Home",
        navServices: "Services",
        navAbout: "About",
        navPricing: "Pricing",
        navContact: "Contact",
        heroBadge: "YOUR DIGITAL PARTNER",
        heroTitle: 'Build Your <span>Digital Future.</span>',
        heroText: "We transform ideas into powerful digital experiences. Websites, branding, AI solutions and more.",
        exploreBtn: "Explore Services ↗",
        contactBtn: "Let's Talk",
        statServices: "Digital Services",
        statCommitment: "Commitment",
        statSupport: "Online Support",
        trustText: "CREATIVE SOLUTIONS FOR YOUR NEXT BIG IDEA",
        servicesLabel: "WHAT WE DO",
        servicesTitle: "Services That Move You Forward",
        servicesText: "Everything you need to build your online presence.",
        filterAll: "All",
        filterDesign: "Design",
        filterWeb: "Web",
        filterTech: "Technology",
        aboutLabel: "ABOUT NEXORA",
        aboutTitle: "Technology Meets Creativity.",
        aboutText: "NEXORA DIGITAL is a creative digital studio focused on helping individuals and businesses grow through modern design and technology.",
        aboutPoint1: "✓ Modern and creative solutions",
        aboutPoint2: "✓ Affordable and transparent pricing",
        aboutPoint3: "✓ Personal support for every project",
        pricingLabel: "SIMPLE PRICING",
        pricingTitle: "Choose Your Package",
        pricingText: "Flexible packages for different needs.",
        faqTitle: "Frequently Asked Questions",
        contactTitle: "Have a Project in Mind?",
        contactText: "Let's turn your idea into something extraordinary.",
        contactAction: "Contact Us on WhatsApp ↗"
    },
    fr: {
        navHome: "Accueil",
        navServices: "Services",
        navAbout: "À propos",
        navPricing: "Tarifs",
        navContact: "Contact",
        heroBadge: "VOTRE PARTENAIRE DIGITAL",
        heroTitle: 'Construisez votre <span>avenir numérique.</span>',
        heroText: "Nous transformons vos idées en expériences numériques puissantes : sites web, identité visuelle, IA et plus.",
        exploreBtn: "Découvrir les services ↗",
        contactBtn: "Parlons-en",
        statServices: "Services numériques",
        statCommitment: "Engagement",
        statSupport: "Assistance en ligne",
        trustText: "DES SOLUTIONS CRÉATIVES POUR VOS GRANDES IDÉES",
        servicesLabel: "NOS SERVICES",
        servicesTitle: "Des services pour avancer",
        servicesText: "Tout ce dont vous avez besoin pour votre présence en ligne.",
        filterAll: "Tout",
        filterDesign: "Design",
        filterWeb: "Web",
        filterTech: "Technologie",
        aboutLabel: "À PROPOS DE NEXORA",
        aboutTitle: "La technologie rencontre la créativité.",
        aboutText: "NEXORA DIGITAL est un studio numérique créatif qui aide les particuliers et les entreprises à se développer grâce au design et à la technologie.",
        aboutPoint1: "✓ Solutions modernes et créatives",
        aboutPoint2: "✓ Tarifs abordables et transparents",
        aboutPoint3: "✓ Accompagnement personnalisé",
        pricingLabel: "TARIFS SIMPLES",
        pricingTitle: "Choisissez votre forfait",
        pricingText: "Des offres flexibles selon vos besoins.",
        faqTitle: "Questions fréquentes",
        contactTitle: "Vous avez un projet ?",
        contactText: "Transformons votre idée en quelque chose d'extraordinaire.",
        contactAction: "Contactez-nous sur WhatsApp ↗"
    },
    ar: {
        navHome: "الرئيسية",
        navServices: "الخدمات",
        navAbout: "من نحن",
        navPricing: "الأسعار",
        navContact: "اتصل بنا",
        heroBadge: "شريكك الرقمي",
        heroTitle: 'اصنع <span>مستقبلك الرقمي.</span>',
        heroText: "نحوّل أفكارك إلى تجارب رقمية قوية: مواقع إلكترونية، تصميم، حلول الذكاء الاصطناعي والمزيد.",
        exploreBtn: "اكتشف خدماتنا ↗",
        contactBtn: "تواصل معنا",
        statServices: "خدمات رقمية",
        statCommitment: "التزام",
        statSupport: "دعم عبر الإنترنت",
        trustText: "حلول إبداعية لأفكارك الكبيرة",
        servicesLabel: "ماذا نقدم",
        servicesTitle: "خدمات تساعدك على التقدم",
        servicesText: "كل ما تحتاجه لبناء حضورك على الإنترنت.",
        filterAll: "الكل",
        filterDesign: "التصميم",
        filterWeb: "المواقع",
        filterTech: "التكنولوجيا",
        aboutLabel: "عن نكسورا",
        aboutTitle: "التكنولوجيا تلتقي بالإبداع.",
        aboutText: "NEXORA DIGITAL استوديو رقمي إبداعي يساعد الأفراد والشركات على التطور باستخدام التصميم والتكنولوجيا الحديثة.",
        aboutPoint1: "✓ حلول حديثة وإبداعية",
        aboutPoint2: "✓ أسعار مناسبة وواضحة",
        aboutPoint3: "✓ دعم شخصي لكل مشروع",
        pricingLabel: "أسعار بسيطة",
        pricingTitle: "اختر الباقة المناسبة",
        pricingText: "باقات مرنة تناسب احتياجاتك.",
        faqTitle: "الأسئلة الشائعة",
        contactTitle: "هل لديك مشروع في ذهنك؟",
        contactText: "لنحوّل فكرتك إلى شيء استثنائي.",
        contactAction: "تواصل معنا عبر WhatsApp ↗"
    }
};

const languageSwitcher = document.getElementById("languageSwitcher");

function setLanguage(language) {
    const dictionary = translations[language] || translations.en;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    localStorage.setItem("nexora-language", language);
}

languageSwitcher.addEventListener("change", event => {
    setLanguage(event.target.value);
});

const savedLanguage = localStorage.getItem("nexora-language") || "en";
languageSwitcher.value = savedLanguage;
setLanguage(savedLanguage);
