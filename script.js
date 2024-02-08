function toggleMenu() {
    var menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('show-menu');
}

function selectOption(option) {
    alert('Selected: ' + option); // You can replace this with your desired functionality
    toggleMenu(); // Close the menu after selecting an option
}

document.addEventListener('dblclick', closeOptions);
document.addEventListener('touchstart', closeOptions);
function toggleOptions(event, cocktailName) {
    var clickedOptions = event.currentTarget.querySelector('.options');

    if (clickedOptions.style.display === 'block') {
        clickedOptions.style.display = 'none';
    } else {
        // Close options for all items
        var allOptions = document.querySelectorAll('.options');
        allOptions.forEach(function (options) {
            options.style.display = 'none';
        });

        clickedOptions.style.display = 'block';
        console.log('Selected cocktail: ' + cocktailName);
        // Additional logic for handling the selection
    }

    event.stopPropagation();
}

function closeOptions() {
    // Close options for all items
    var allOptions = document.querySelectorAll('.options');
    allOptions.forEach(function (options) {
        options.style.display = 'none';
    });
}


