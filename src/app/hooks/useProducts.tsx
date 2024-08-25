import { useEffect, useState } from "react";
import getData from '../functions/getData'

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