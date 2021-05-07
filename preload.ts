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
});

var addRecipe = (list : HTMLElement, recipe : Recipe) => {
  let ele = document.createElement("p");

  

  list.appendChild(ele);
}