"use client";

import useRandomProducts from "@/app/hooks/useRandomProducts";
import { useParams } from "next/navigation";
import { COCKTAIL_API } from "@/constants/baseUrls";
import LinkMenu from "@/app/atomic/atoms/LinkMenu";
import ProductCard from "@/app/atomic/organisms/ProductCard";
import Wait from "@/app/atomic/organisms/Wait";
import useProduct from "@/app/hooks/useProducts";
import Categories from "@/app/atomic/organisms/Categories";
import { useContext } from "react";
import { CategoriesCocktailContext } from "@/constants/CategoriesContext";


function CategoryPage() {
    const router = useParams();
    const cocktailCategory = router?.category;
    const products: any = useProduct(COCKTAIL_API, 'filter.php?c=' + cocktailCategory);
    const categories = useContext(CategoriesCocktailContext);

    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">

            <Categories categories={categories} url=""/>

            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {products?.product?.drinks?.length > 0 ?
                    products?.product?.drinks?.map((product: any) => (
                        <ProductCard
                            key={product?.idDrink}
                            id={parseInt(product?.idDrink)}
                            name={product?.strDrink}
                            image={product?.strDrinkThumb}
                            category={product?.strCategory == null ? cocktailCategory : product?.strCategory}
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

export default CategoryPage;