// Initialisation au chargement de la page
window.addEventListener("load", () => {
    window.scrollTo(0,0);
    
    // Initialiser l'icône du thème
    const isLightMode = localStorage.getItem('theme') === 'light';
    if (isLightMode) {
        document.body.classList.add("light");
        const themeIcon = document.getElementById("themeIcon");
        if (themeIcon) themeIcon.textContent = "☀️";
    }
});

// Fonction pour basculer le thème
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");
    
    body.classList.toggle("light");
    
    // Sauvegarder la préférence
    if (body.classList.contains("light")) {
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.textContent = "☀️";
    } else {
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.textContent = "🌙";
    }
}

// Fonction pour ouvrir l'email (remplace le formulaire)
function openEmailClient() {
    const email = "les.voix.claires.92@gmail.com";
    const subject = "Contact - Les Voix Claires 92";
    const body = "Bonjour,\n\nJe souhaite vous contacter pour : \n\n[Veuillez détailler votre demande ici]\n\nCordialement,\n\n";
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Fonction pour le défilement fluide
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}