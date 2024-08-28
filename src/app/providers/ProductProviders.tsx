"use client";

import { COCKTAIL_API, MEAL_API } from "@/constants/baseUrls";
import { CategoriesCocktailContext, CategoriesMealContext } from "@/constants/CategoriesContext";
import { CountriesContext } from "@/constants/CountriesContext";
import { ReactNode, useEffect, useState } from "react";
import useProduct from "../hooks/useProducts";

export default function ProductProvider({ children }: { children: ReactNode }) {
    const [isClient, setIsClient] = useState(false);
    const resultCocktail = useProduct(COCKTAIL_API, 'list.php?c=list');
    const resultMeal = useProduct(MEAL_API, 'list.php?c=list');
    const resultCountires = useProduct(MEAL_API, 'list.php?a=list');


    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <CategoriesCocktailContext.Provider value={resultCocktail?.product?.drinks}>
            <CategoriesMealContext.Provider value={resultMeal?.product?.meals}>
                <CountriesContext.Provider value={resultCountires?.product?.meals}>
                    {children}
                </CountriesContext.Provider>
            </CategoriesMealContext.Provider>
        </CategoriesCocktailContext.Provider>
    );
}