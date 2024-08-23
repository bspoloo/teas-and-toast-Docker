import { useEffect, useState } from "react";
import { getSingleMeal } from "@/api/meals";

export const useSingleMealData = (id: string | string[]) => {
    const [meal, setMeal] = useState(null);
    const [imageMeal, setImageMeal] = useState(null);
    const [recipeMeal, setRecipeMeal] = useState<String[]>([]);
    const [ingredients, setIngredients] = useState<String[]>([]);
    const [measures, setMeasures] = useState<String[]>([]);
    const [videoTutorial, setVideoTutorial] = useState("");
    const [titleMeal, setTitleMeal] = useState("");
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      // setLoading(true)
      if (id) {
        getSingleMeal(id).then((data) => {
          const currentMeal = data.meals[0];
          const newIngredients = [];
          const newMeasures = [];
          for (let i = 1; i <= 20; i++) {
            if (currentMeal[`strIngredient${i}`] && currentMeal[`strIngredient${i}`] !== 'null' && currentMeal[`strIngredient${i}`] !== '') {
              newIngredients.push(currentMeal[`strIngredient${i}`]);
              newMeasures.push(currentMeal[`strMeasure${i}`]);
            }
          }
  
          setMeal(currentMeal);
          setRecipeMeal(currentMeal.strInstructions.split('.'));
          setImageMeal(currentMeal.strMealThumb);
          setTitleMeal(currentMeal.strMeal);
          setVideoTutorial(currentMeal.strYoutube || '');
          setIngredients(newIngredients);
          setMeasures(newMeasures);
          // setLoading(false);
        })
      }
    },[id]);
    
    return { meal, imageMeal, recipeMeal, ingredients, measures, videoTutorial, titleMeal, loading };
    }
