
function toggleOptions(event, cocktailName) {
  let clickedOptions = event.currentTarget.querySelector(".options");

  if (clickedOptions.style.display === "block") {
    clickedOptions.style.display = "none";
  } else {
    // Close options for all items
    let allOptions = document.querySelectorAll(".options");
    allOptions.forEach(function (options) {
      options.style.display = "none";
    });

    clickedOptions.style.display = "block";
    console.log("Selected cocktail: " + cocktailName);
    // Additional logic for handling the selection
  }

  event.stopPropagation();
}

function close(event) {
    
}
 
