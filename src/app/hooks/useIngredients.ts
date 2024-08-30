

import { useEffect, useState } from "react";
import getData from '../functions/getData'
import { MEAL_API } from "@/constants/baseUrls";
import { COCKTAIL_API } from "@/constants/baseUrls";

type Product = {
    id: string;
    name: string;
    image: string;
    type: string
}

function useIngredient(endpoint: string, ingredient: string): { products: Product[], loading: boolean, error: string | null} {
    const urls = [MEAL_API, COCKTAIL_API];
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            setError(null);

            const newProducts: Product[] = [];
            for (const url of urls) {
                try{
                    const data = await getData(url, endpoint + encodeURIComponent(ingredient));
                    console.log(data);
                    
                    if (data.drinks) {
                        newProducts.push(...data.drinks.map((drink: any) => ({
                            id: drink.idDrink,
                            name: drink.strDrink,
                            image: drink.strDrinkThumb,
                            type: 'cocktails'
                        })));
                    }
                    if (data.meals) {
                        newProducts.push(...data.meals.map((meal: any) => ({
                            id: meal.idMeal,
                            name: meal.strMeal,
                            image: meal.strMealThumb,
                            type: 'meals'
                        })));
                    }
                    console.log(data);
                }catch (err){
                    setError('error fetching data')
                } 
            }
            setProducts(newProducts);
            setLoading(false);
        }
        fetchData();
    }, [ingredient]);
    return { products, loading, error};
}
export default useIngredient;