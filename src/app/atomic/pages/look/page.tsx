"use client";

import ProductCard from "../../organisms/ProductCard"
import { useState } from "react";
import SearchPresentation from "../../organisms/SearchPresentation";
import SearchForm from "../../organisms/SearchForm";
import useIngredient from "@/app/hooks/useIngredients";
import Searching from "@/app/atomic/organisms/Searching";
import NotFound from "../../organisms/NotFound";

type Product = {
    id: string;
    name: string;
    image: string;
    type: string;
}

export default function Page() {
    const [inputText, setInputText] = useState('');
    const { products, loading, error } = useIngredient('search.php?s=', inputText);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
        console.log(products);
    };
    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap gap-9 mb-5 mt-5">
            <SearchPresentation
                title="Find a meal or cocktail"
                text="Search a meal o cocktal by their name "
            />
            <SearchForm
                text='Enter the name product'
                handleChange={handleChange}
            />

            <div className="bg-[#d7d7d9] background-search flex flex-row gap-5 flex-wrap items-center justify-center  pb-20 pt-20 border rounded-3xl">
                {loading ? (
                    <Searching />
                ) : products.length > 0 ? (
                    (
                        products.map((product: Product) => (
                            <ProductCard
                                key={product.id}
                                id={parseInt(product.id)}
                                name={product.name}
                                image={product.image}
                                category={inputText}
                                singleRecipeRoute={'/' + product.type + '/'}
                            />
                        ))
                    )
                ) : (
                    <NotFound />
                )}
            </div>
        </main>
    );
}