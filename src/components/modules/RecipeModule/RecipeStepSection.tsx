import Image from "next/image";
import { RecipeStepCard } from "@/components/elements";
import { recipeStep } from "./recipeData";

function RecipeStepSection() {
    const starIcons = Array(5).fill(null)
    return <>
      <div className="mt-4 ml-32">
        <div className="flex h-fit items-center">
            <h2 className="text-4xl">Langkah-langkah</h2>
            <div className="h-fit items-center content-center">
                <Image src="/images/elm-line.png" alt="green line" width={790} height={100}/>
            </div>
        </div>
        <div className="rounded-lg shadow-xl bg-garlic h-auto w-3/4 ml-6 p-10 overflow-y-auto mb-8">
            {recipeStep.map((recipe) => (<RecipeStepCard key={recipe.number} number={recipe.number} step={recipe.step}/>))}
        </div>
      </div>
    </>
  }

export { RecipeStepSection };