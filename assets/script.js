const NOVA_DEV_EMAIL = "novadevelopment143@gmail.com"; 

document.addEventListener('DOMContentLoaded', () => {
    const emailButton = document.getElementById('email-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('menu-button');
    const pageContents = document.querySelectorAll('.page-content');
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');

            /**
             * @param {string} message
             */
    function showStatus(message) {
        const statusElement = document.getElementById('status-message');
        statusElement.textContent = message;
        statusElement.classList.remove('hidden');
        statusElement.style.opacity = 1;
                
        setTimeout(() => {
            statusElement.style.opacity = 0;
            setTimeout(() => statusElement.classList.add('hidden'), 300);
        }, 3000);
    }

            /**
             * @param {string} pageId 
             */
    window.showPage = function(pageId) {
        pageContents.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('active');
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('active');
        }

        navLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (link.dataset.page === pageId) {
                link.classList.add('nav-active');
            }
        });

        mobileMenu.classList.add('hidden');
    }

    function updateFromHash() {
        const hash = window.location.hash.substring(1) || 'accueil';
        showPage(hash);
    }

    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);

    emailButton.addEventListener('click', (e) => {
        const subject = encodeURIComponent("Demande pour Projet Web");
        const mailtoLink = `mailto:${NOVA_DEV_EMAIL}?subject=${subject}`;

        window.location.href = mailtoLink;
                
        showStatus(`Ouverture de votre client e-mail pour envoyer à ${NOVA_DEV_EMAIL}...`);
    });

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const pageId = link.dataset.page;
            window.location.hash = pageId; 
        });
    });
});
