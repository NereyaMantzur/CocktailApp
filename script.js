function toggleMenu() {
    var menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('show-menu');
}

function selectOption(option) {
    alert('Selected: ' + option); // You can replace this with your desired functionality
    toggleMenu(); // Close the menu after selecting an option
}
document.addEventListener("scroll", function () {
    // Get the position of the specific box
    const boxElement = document.getElementById("specific-box");
    const boxPosition = boxElement.getBoundingClientRect();

    // Check if the box is in the viewport
    if (boxPosition.top < window.innerHeight && boxPosition.bottom >= 0) {
        // Add the 'scrolled' class when the box is in view
        document.querySelectorAll(".cocktail-item").forEach(function (item) {
            item.classList.add("scrolled");
        });
    } else {
        // Remove the 'scrolled' class when the box is not in view
        document.querySelectorAll(".cocktail-item").forEach(function (item) {
            item.classList.remove("scrolled");
        });
    }
});
