"use client";

import ProductCard from "../../organisms/ProductCard"
import { MEAL_API } from "@/constants/baseUrls";
import useRandomProducts from "@/app/hooks/useRandomProducts";
import Wait from '../../organisms/Wait'
import Categories from "../../organisms/Categories";
import { useContext } from "react";
import { CategoriesMealContext } from "@/constants/CategoriesContext";

export default function Page() {

    const products: any = useRandomProducts(12, MEAL_API, 'random.php');
    const categories = useContext(CategoriesMealContext);
    
    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">

            <Categories categories={categories} url="meals/category/"/>

            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {products?.length > 0 ?
                    products.map((product: any) => (
                        <ProductCard
                            key={product?.meals[0]?.idMeal}
                            id={parseInt(product?.meals[0]?.idMeal)}
                            name={product?.meals[0]?.strMeal}
                            image={product?.meals[0]?.strMealThumb}
                            category={product?.meals[0]?.strCategory}
                            singleRecipeRoute="/meals/"
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