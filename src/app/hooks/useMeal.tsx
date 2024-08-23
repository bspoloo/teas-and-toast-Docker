import { useEffect, useState } from "react";
import { MEAL_API } from "@/constants/baseUrls";


function getData(url: string, endopint: string) {
    return fetch(url + endopint)
        .then(response => response.json())
        .then(data => data)
}

function useProduct(url: string, endopint: string): { product: any } {

    const [product, setProduct] = useState<any>(null);
    
    useEffect(() => {
        getData(url, endopint)
            .then(product => {
                setProduct(product);
            }
        )
    }, [url, endopint]);

    return {product};
}

export default useProduct;