import { Searchbar, Navbar, RecipeCard } from "@/components";
import { recipeData } from "./recipeData";
import Footer from "@/components/elements/Footer";

function RecipeListModule() {
    return <>
      <Navbar />
      <Searchbar input="Mau masak apa hari ini?"/>
      <div className="ml-24 mr-20 mt-8 grid grid-cols-4 gap-6">
      {recipeData.map((recipe) => (
          <RecipeCard key={recipe.title} title={recipe.title} image={recipe.image} />
        ))
      }
      </div>
      <Footer />
    </>
  }

export { RecipeListModule };
