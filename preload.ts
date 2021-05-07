const Units = ["", ""];

interface ingredient {
  Name : string
  Amount : number
  Unit : any;
}

interface Recipe {
  Name : string;
  
  Ingredients : Array<ingredient>;
  Amount : number;
}

window.addEventListener('DOMContentLoaded', () => {
  

  let recipeList = document.getElementById("recipe-list")

  let testRecipe:Recipe =  {
    Name:"Spaghetti med kødboller",
    Amount:8,
    Ingredients:[
      {Name:"Spaghetti", Amount:200, Unit:"kg"},
      {Name:"Kødboller", Amount:2, Unit:""},
    ]};

    displayRecipe(recipeList, testRecipe);
});

var displayRecipe = (list : HTMLElement, recipe : Recipe) => {
  const recipeTemplate = (document.querySelector("template#recipe-template") as HTMLTemplateElement);
  let recipeNode = recipeTemplate.content.cloneNode(true);
  
  

  list.appendChild(recipeNode);
}