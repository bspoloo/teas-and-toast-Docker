'use client';
import { useParams } from "next/navigation";
import { useSingleMealData } from "@/hooks/useSingleMealData";
import Title from "@/app/atomic/atoms/Title";
import VideoTutorial from "@/app/atomic/atoms/singleMealView/VideoTutorial";
import RecipeInstructions  from "@/app/atomic/organisms/singleMealView/RecipeInstructions";
import IngredientsList from "@/app/atomic/organisms/singleMealView/IngredientsList";
import ImageVector from "@/app/atomic/atoms/ImageVector";
import { Fullscreen } from "lucide-react";

export default function SingleMealPage() {
  const router = useParams();
  const mealId = router?.id;
  const { titleMeal, ingredients, measures, videoTutorial, imageMeal, recipeMeal, loading} = useSingleMealData(mealId);
  return (
    <div className="ml-10 mr-10 md:ml-40 md:mr-40 mb-10 mt-10">
      <div className="flex flex-col gap-y-10 items-center">
        {loading? (
          <img src="/loading-gifs/simple-frying-pan.gif" />

        ): (
          <>
            <Title className={'text-5xl'} TextContent={titleMeal} />
            <ImageVector  classname="object-cover h-96" url={imageMeal} alt={titleMeal} width={900}/>
            <h1 className="text-2xl font-bold">Stepes to follow to achive this delicous meal!!</h1>
            <RecipeInstructions content={recipeMeal}/>
            <h1 className="text-2xl font-bold">What are the necessary measures for its preparation?</h1>
            <IngredientsList ingredients={ingredients} measures={measures}/>
            <VideoTutorial  containerStyle={'mt-8 w-full sm:w-4/5 md:ml-8 '} videStyle={'absolute top-0 left-0 w-full h-full'} src={videoTutorial}/>
          </>
        )}
      </div>
    </div>
  )
}