import { Navbar, RecipeDescriptionSection, RecipeIngredientsSection, RecipeShopSection, RecipeStepSection } from "@/components"

export default function Page() {
    return <>
      <Navbar />
      <RecipeDescriptionSection />
      <RecipeIngredientsSection />
      <RecipeShopSection />
      <RecipeStepSection />
    </>
  }