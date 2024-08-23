"use client";

import useProduct from "@/app/hooks/useMeal"
import ProductCard from "../../organisms/ProductCard"
import { MEAL_API } from "@/constants/baseUrls";
import useRandomProducts from "@/app/functions/useRandomProducts";
import Wait from '../../organisms/Wait'


export default function Page() {

    const products = useRandomProducts(12, MEAL_API, 'random.php');

    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {products.length > 0 ?
                    products.map(product => (
                        <ProductCard
                            key={product.meals[0].idMeal}
                            id={parseInt(product.meals[0].idMeal)}
                            name={product.meals[0].strMeal}
                            image={product.meals[0].strMealThumb}
                            category={product.meals[0].strCategory}
                            singleRecipeRoute="/meals/"
                        />
                    )): (
                        <div>
                            <Wait/>
                        </div>
                    )}
            </div>
        </main>
    )
}