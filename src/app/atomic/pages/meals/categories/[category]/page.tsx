"use client";

import { useParams } from "next/navigation";
import { MEAL_API } from "@/constants/baseUrls";
import Categories from "@/app/atomic/organisms/Categories";
import ProductCard from "@/app/atomic/organisms/ProductCard";
import Wait from "@/app/atomic/organisms/Wait";
import useProduct from "@/app/hooks/useProducts";
import { useContext } from "react";
import { CategoriesMealContext } from "@/constants/CategoriesContext";



function CategoryPage() {
    
    const router = useParams();
    const mealCategory = router?.category;
    const products: any = useProduct(MEAL_API, 'filter.php?c=' + mealCategory);
    const categories = useContext(CategoriesMealContext);
    
    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">

            <Categories categories={categories} url=""/>

            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {products?.product?.meals?.length > 0 ?
                    products?.product?.meals?.map((product: any) => (
                        <ProductCard
                            key={product?.idMeal}
                            id={parseInt(product?.idMeal)}
                            name={product?.strMeal}
                            image={product?.strMealThumb}
                            category={product?.strCategory == null ? mealCategory : product?.strCategory}
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