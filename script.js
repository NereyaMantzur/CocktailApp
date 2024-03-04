function toggleOptions(event, cocktailName) {
  let clickedOptions = event.currentTarget.querySelector(".options");

  if (clickedOptions.style.display === "block") {
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

var orders = document.querySelectorAll(".cocktailOrder");
orders.forEach(function (element) {
  element.addEventListener("click", orderThis);
});
function orderThis(event) {
  alert(event.currentTarget.getAttribute("id"));
  var cocktailName = event.currentTarget.getAttribute("id");
  window.location.href =
    "https://nereyamantzur.github.io/CocktailApp/" + cocktailName + ".html";
}

//TODO: HELP TH FCK OUTTTTTTT
//FIXME: HELP TH FCK OUTTTTTTT
