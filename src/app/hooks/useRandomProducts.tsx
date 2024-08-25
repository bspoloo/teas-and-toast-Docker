import { useEffect, useState } from "react";
import getData from "../functions/getData";

function useRandomProducts(n: number, url: string, endpoint: string) {
    const [products, setProducts] = useState<any[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const promises = [];
                for (let i = 0; i < n; i++) {
                    promises.push(getData(url, endpoint));
                }

                // Esperar a que todas las promesas se resuelvan
                const fetchedProducts = await Promise.all(promises);
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [n, url, endpoint]);
    return products;
}
export default useRandomProducts;