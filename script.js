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

function order(event) {
  let example = (body.style.display = "none");
}

function addCocktail(event) {
  event.preventDefault();
  let cocktailName = event.target.name.value;
  let cocktailIngredients = event.target.ingredients.value;
  let cocktailInstructions = event.target.instructions.value;
  let newCocktail = new Cocktail(cocktailName, cocktailIngredients, cocktailInstructions);
  cocktailList.push(newCocktail);
  event.target.name.value = "";
  event.target.ingredients.value = "";
  event.target.instructions.value = "";
}




//TODO: HELP TH FCK OUTTTTTTT
//FIXME: HELP TH FCK OUTTTTTTT
