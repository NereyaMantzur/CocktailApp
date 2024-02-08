function toggleMenu() {
    var menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('show-menu');
}

function selectOption(option) {
    alert('Selected: ' + option); // You can replace this with your desired functionality
    toggleMenu(); // Close the menu after selecting an option
}
function toggleOptions(event, cocktailName) {
    var options = event.currentTarget.querySelector('.options');
    options.style.display = (options.style.display === 'block') ? 'none' : 'block';
    if (options.style.display === 'block') {
        console.log('Selected cocktail: ' + cocktailName);
        // Additional logic for handling the selection
    }
}
