"use client";

import useProduct from "@/app/hooks/useMeal"
import ProductCard from "../../organisms/ProductCard"
import { COCKTAIL_API } from "@/constants/baseUrls";
import useRandomProducts from "@/app/functions/useRandomProducts";
import Wait from '../../organisms/Wait'


export default function Page() {

    const products = useRandomProducts(12, COCKTAIL_API, 'random.php');

    console.log(products);

    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {products.length > 0 ?
                    products.map(product => (
                        <ProductCard
                            key={product.drinks[0].idDrink}
                            id={parseInt(product.drinks[0].idDrink)}
                            name={product.drinks[0].strDrink}
                            image={product.drinks[0].strDrinkThumb}
                            category={product.drinks[0].strCategory}
                            singleRecipeRoute="/cocktails/"
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