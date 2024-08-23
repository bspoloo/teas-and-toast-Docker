import { useEffect, useState } from "react";
import useProduct from "../hooks/useMeal";


function getData(url: string, endopint: string) {
    return fetch(url + endopint)
        .then(response => response.json())
        .then(data => data)
}

function useRandomProducts(n: number, url: string, endpoint: string) {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProducts = [];
            for (let i = 0; i < n; i++) {
                const response = await fetch(url + endpoint);
                const data = await response.json();
                fetchedProducts.push(data);
            }
            setProducts(fetchedProducts);
        };

        fetchData();
    }, [n, url, endpoint]);
    return products;
}

export default useRandomProducts;