"use client";

import useProducts from "@/app/hooks/useProducts"
import ProductCard from "../../organisms/ProductCard"
import { COCKTAIL_API } from "@/constants/baseUrls";
import useRandomProducts from "@/app/hooks/useRandomProducts";
import Wait from '../../organisms/Wait'
import Categories from "../../organisms/Categories";
import { useContext } from "react";
import { CategoriesCocktailContext } from "@/constants/CategoriesContext";


export default function Page() {

    const products: any = useRandomProducts(12, COCKTAIL_API, 'random.php');
    const categories = useContext(CategoriesCocktailContext);
    
    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">

            <Categories categories={categories} url="cocktails/category/"/>

            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {products.length > 0 ?
                    products.map((product: any) => (
                        <ProductCard
                            key={product.drinks[0].idDrink}
                            id={parseInt(product.drinks[0].idDrink)}
                            name={product.drinks[0].strDrink}
                            image={product.drinks[0].strDrinkThumb}
                            category={product.drinks[0].strCategory}
                            singleRecipeRoute="/cocktails/"
                        />
                    )) : (
                        <div>
                            <Wait />
                        </div>
                    )}
            </div>
        </main>
    )
}