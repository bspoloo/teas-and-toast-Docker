"use client";

import { ReactNode, useEffect, useState } from "react";
import useProduct from "../hooks/useProducts";
import { COCKTAIL_API, MEAL_API } from "@/constants/baseUrls";
import { CategoriesCocktailContext, CategoriesMealContext } from "@/constants/CategoriesContext";

export default function ProductProvider({ children }: { children: ReactNode }) {
    const [isClient, setIsClient] = useState(false);
    const resultCocktail = useProduct(COCKTAIL_API, 'list.php?c=list');
    const resultMeal = useProduct(MEAL_API, 'list.php?c=list');

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <CategoriesCocktailContext.Provider value={resultCocktail?.product?.drinks}>
            <CategoriesMealContext.Provider value={resultMeal?.product?.meals}>
                {children}
            </CategoriesMealContext.Provider>
        </CategoriesCocktailContext.Provider>
    );
}