/**
 * Ficha prática 3 - Slide 31
 * @author Pedro Machado "pedroma2000"
 */
var email = document.getElementById('email');

email.addEventListener("input", function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValitidy('I expected a valid email');
    } else {
        email.setCustomValitidy('');
    }
});