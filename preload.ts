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

const nodeTemplate = "<tr><td><p>{{Name}}</p></td><td><p>{{Ingredients}}</p></td></tr>";

const displayRecipe = (list : HTMLElement, recipe : Recipe) => {
  const recipeTemplate = (document.getElementById("recipe-template") );
  let recipeNode = recipeTemplate.cloneNode(true);

  console.log(recipeNode);
  console.log(recipeNode.nodeValue);

  recipeNode.textContent = recipeNode.textContent.replace("{{Name}}", recipe.Name);

  list.appendChild(recipeNode);
}