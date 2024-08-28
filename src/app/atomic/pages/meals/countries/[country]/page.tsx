"use client";

import { useParams } from "next/navigation";
import { MEAL_API } from "@/constants/baseUrls";
import Categories from "@/app/atomic/organisms/Categories";
import ProductCard from "@/app/atomic/organisms/ProductCard";
import Wait from "@/app/atomic/organisms/Wait";
import useProduct from "@/app/hooks/useProducts";
import { useContext } from "react";
import { CountriesContext } from "@/constants/CountriesContext";
import Countries from "@/app/atomic/organisms/Countries";



function CategoryPage() {
    const router = useParams();
    const mealCountry = router?.country;
    const products: any = useProduct(MEAL_API, 'filter.php?a=' + mealCountry);
    const countries = useContext(CountriesContext);
    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">
            <Countries countries={countries} url=""/>
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {products?.product?.meals?.length > 0 ?
                    products?.product?.meals?.map((product: any) => (
                        <ProductCard
                            key={product?.idMeal}
                            id={parseInt(product?.idMeal)}
                            name={product?.strMeal}
                            image={product?.strMealThumb}
                            category={product?.strC == null ? mealCountry : product?.strCategory}
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

export default CategoryPage;