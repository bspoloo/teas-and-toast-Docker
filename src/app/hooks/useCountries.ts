import { getRecipeCountries } from "@/api/main";
import { useEffect, useState } from "react";

const useCountries = () => {
    const [countries, setCountries] = useState();
    
    useEffect(() => {
        getRecipeCountries().then((data) => {
            setCountries(data);
        });
    }, []);
    
    return countries;
    }


export default useCountries;