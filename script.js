$(document).ready(function() {
    // Utilisation de jQuery pour initialiser le scrollspy
    $('body').scrollspy({ target: '#scrollspy' });

    // Initialisation des tooltips et Popovers Bootstrap après le chargement complet du DOM
    $('[data-bs-toggle="tooltip"]').tooltip();
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    // Navbar scroll event pour ajouter ou supprimer la classe 'scrolled'
    $(window).scroll(function () {
        var navbar = $('.navbar');
        var scrollTop = $(window).scrollTop();
        var navbarHeight = navbar.outerHeight();

        if (scrollTop > 0) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }

        // Activer les animations lors du défilement de la page
        activateAnimations();
    });

    // Ajustement de la position de défilement
    $('.navbar-nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var navbarHeight = $('.navbar').outerHeight();
            $('html, body').scrollTop($(hash).offset().top - navbarHeight);
        }
    });

    // Fonction pour activer les animations lorsque les éléments deviennent visibles
    function activateAnimations() {
        var animatedElements = document.querySelectorAll('.animate__animated');

        animatedElements.forEach(function(element) {
            var waypoint = new Waypoint({
                element: element,
                handler: function() {
                    if (element.tagName.toLowerCase() === 'img' || element.closest('#services')) {
                        element.classList.add('animate__zoomIn', 'visible');
                        element.classList.remove('hidden');
                        this.destroy();
                    }
                },
                offset: '90%'
            });
        });
    }

    // Appel de la fonction pour activer les animations lors du chargement initial de la page
    activateAnimations();

    // Appel de la fonction pour activer les animations à chaque fois que la fenêtre est redimensionnée
    $(window).resize(function() {
        activateAnimations();
    });

    // Événement de copie pour désactiver le copier-coller sur le site
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        console.log("Le copier-coller est désactivé sur ce site.");
    });
});
