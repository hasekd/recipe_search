import { useState } from "react";
import DisplayRecipe from "./components/DisplayRecipe";
import SearchRecipe from "./components/SearchRecipe";

function App() {
  const [recipe, setRecipe] = useState([]);

  const addRecipeHandler = (recipeData) => setRecipe(recipeData);
  return (
    <>
      <SearchRecipe onAddRecipe={addRecipeHandler} />
      <DisplayRecipe recipe={recipe} />
    </>
  );
}

export default App;
