function toggleMenu() {
    var menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('show-menu');
}

function selectOption(option) {
    alert('Selected: ' + option); // You can replace this with your desired functionality
    toggleMenu(); // Close the menu after selecting an option
}

document.addEventListener('click', closeOptions);
  document.addEventListener('touchstart', closeOptions);

  function toggleOptions(event, cocktailName) {
    var clickedOptions = event.currentTarget.querySelector('.options');
    var allOptions = document.querySelectorAll('.options');

    allOptions.forEach(function (options) {
      if (options !== clickedOptions) {
        options.style.display = 'none';
      }
    });

    clickedOptions.style.display = (clickedOptions.style.display === 'block') ? 'none' : 'block';
    
    if (clickedOptions.style.display === 'block') {
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


