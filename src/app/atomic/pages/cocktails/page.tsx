"use client";

import useProduct from "@/app/hooks/useMeal"
import ProductCard from "../../organisms/ProductCard"
import { COCKTAIL_API } from "@/constants/baseUrls";
import useRandomProducts from "@/app/functions/useRandomProducts";
import Wait from '../../organisms/Wait'
import LinkMenu from "../../atoms/LinkMenu";


export default function Page() {

    const products = useRandomProducts(12, COCKTAIL_API, 'random.php');
    const categories = useRandomProducts(1, COCKTAIL_API, 'list.php?c=list');

    console.log(categories);

    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap">
            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {categories.length > 0 && categories[0].drinks.length > 0 ?

                    categories[0].drinks.map((category: any, index: any) => (
                        <LinkMenu key={index} url={'/cocktails/category/'+category.strCategory} title={category.strCategory} className="rounded-full font-bold p-4 border-2 border-[#2C2F24] text-[#2C2F24] hover:bg-[#AD343E] hover:text-white hover:border-[#AD343E]"/>
                    )): (
                        <div>
                            Loading categories...
                        </div>
                    )}
            </div>

            <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
                {products.length > 0 ?
                    products.map(product => (
                        <ProductCard
                            key={product.drinks[0].idDrink}
                            id={parseInt(product.drinks[0].idDrink)}
                            name={product.drinks[0].strDrink}
                            image={product.drinks[0].strDrinkThumb}
                            category={product.drinks[0].strCategory ? '' : product.drinks[0].strCategory}
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