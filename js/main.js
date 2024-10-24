window.onload = function() {
    // Fonction pour détecter si l'appareil est mobile ou non
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    }

    // Exécuter la fonction lors du chargement de la page
    if (isMobileDevice()) {
        console.log("Vous utilisez un appareil mobile.");
        // Ici, vous pouvez ajouter d'autres actions spécifiques pour les appareils mobiles
    } else {
        console.log("Vous utilisez un ordinateur de bureau.");
        // Ici, vous pouvez ajouter d'autres actions spécifiques pour les ordinateurs
    }
};