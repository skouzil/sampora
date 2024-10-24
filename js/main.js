import { isMobileDevice } from "js/functions.js";

window.onload = function() {

     // Exécuter la fonction lors du chargement de la page
     if (isMobileDevice()) {
        console.log("Vous utilisez un appareil mobile.");
        // Ici, vous pouvez ajouter d'autres actions spécifiques pour les appareils mobiles
    } else {
        console.log("Vous utilisez un ordinateur de bureau.");
        // Ici, vous pouvez ajouter d'autres actions spécifiques pour les ordinateurs
    }
}

