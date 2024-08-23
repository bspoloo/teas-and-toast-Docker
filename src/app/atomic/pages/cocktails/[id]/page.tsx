'use client';
import { useParams } from "next/navigation";
import SingleRecipePage from "@/app/atomic/organisms/SingleRecipeView";
import { COCKTAIL_API } from "@/constants/baseUrls";

export default function SingleCocktailPage() {
    const router = useParams();
    const mealId = router?.id;
    return (
      <div className="ml-10 mr-10 md:ml-40 md:mr-40 mb-10 mt-10">
        <div className="flex flex-col gap-y-10 items-center">
          <SingleRecipePage 
            mealId={mealId}
            recipeTyp={'cocktail'} 
            baseUrl={COCKTAIL_API}
          />
        </div>
      </div>
    )
}