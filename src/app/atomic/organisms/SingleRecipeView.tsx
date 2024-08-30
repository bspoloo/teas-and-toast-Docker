'use client';
import { useParams } from "next/navigation";
import useSingleRecipeData from "@/app/hooks/useSingleRecipeData";
import Title from "@/app/atomic/atoms/Title";
import VideoTutorial from "@/app/atomic/atoms/singleMealView/VideoTutorial";
import RecipeInstructions from "@/app/atomic/organisms/singleMealView/RecipeInstructions";
import IngredientsList from "@/app/atomic/organisms/singleMealView/IngredientsList";
import ImageVector from "@/app/atomic/atoms/ImageVector";
import Wait from "@/app/atomic/organisms/Wait";

type SingleRecipePageProps = {
    mealId: string | string[];
    recipeType: string;
    baseUrl: string;
}
export default function SingleRecipePage({ mealId, recipeType, baseUrl }: SingleRecipePageProps) {
    const { ingredients, measures, videoTutorial, imageMeal, loading, recipeInstructions, titleRecipe } = useSingleRecipeData(mealId, recipeType, baseUrl);
    return (
        <>
            {loading ? (
                <div>
                    <Wait />
                </div>
            ) : (
                <>
                    <Title className={'text-5xl'} TextContent={titleRecipe} />
                    <ImageVector classname="object-cover h-96" url={imageMeal} alt={titleRecipe} width={900} />
                    <h1 className="text-2xl font-bold">Steps to follow to achieve this delicious recipe!!</h1>
                    <RecipeInstructions content={recipeInstructions} />
                    <h1 className="text-2xl font-bold">What are the necessary measures for its preparation?</h1>
                    <IngredientsList ingredients={ingredients} measures={measures} />
                    {videoTutorial ? <VideoTutorial containerStyle={'mt-8 w-full sm:w-4/5 md:ml-8 '} videStyle={'absolute top-0 left-0 w-full h-full'} src={videoTutorial} /> : null}
                </>
            )}
        </>
    )
}