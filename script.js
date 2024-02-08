function toggleMenu() {
    let  menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('show-menu');
}

function selectOption(option) {
    alert('Selected: ' + option); // You can replace this with your desired functionality
    toggleMenu(); // Close the menu after selecting an option
}

document.addEventListener('click', closeOptions);

function toggleOptions(event, cocktailName) {
    let clickedOptions = event.currentTarget.querySelector('.options');

    if (clickedOptions.style.display === 'block') {
        clickedOptions.style.display = 'none';
    } else {
        // Close options for all items
        let allOptions = document.querySelectorAll('.options');
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
    let allOptions = document.querySelectorAll('.options');
    allOptions.forEach(function (options) {
        options.style.display = 'none';
    });
}


