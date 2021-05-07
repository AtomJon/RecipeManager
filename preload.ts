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

const displayRecipe = (list : HTMLElement, recipe : Recipe) => {
  const recipeTemplate = (document.getElementById("recipe-template") as HTMLTemplateElement);
  let recipeNode = recipeTemplate.content.cloneNode(true) as HTMLElement;

  console.log(recipeNode.innerText);

  recipeNode.innerText = recipeNode.innerText.replace("{{Name}}", recipe.Name);

  list.appendChild(recipeNode);
}