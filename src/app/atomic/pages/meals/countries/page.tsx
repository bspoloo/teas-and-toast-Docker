"use client";

import Countries from "@/app/atomic/organisms/Countries";
import useRandomProducts from "@/app/hooks/useRandomProducts";
import { MEAL_API } from "@/constants/baseUrls";
import { CountriesContext } from "@/constants/CountriesContext";
import { useContext } from "react";
import ProductCard from "../../../organisms/ProductCard";
import Wait from '../../../organisms/Wait';


export default function CountriesPage() {
    const products: any = useRandomProducts(12, MEAL_API, 'random.php');
    const countries = useContext(CountriesContext);
    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">
            <Countries countries={countries} url="countries/"/>
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