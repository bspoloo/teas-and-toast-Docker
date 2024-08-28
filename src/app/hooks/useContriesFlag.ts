import { getShinyCountryFlag } from "@/api/main";
import { useEffect, useState } from "react";

const useCountriesFlag = (country: string) => {
    const [flag, setFlag] = useState();
    
    useEffect(() => {
        getShinyCountryFlag(country).then((data) => {
            setFlag(data);
        });
    }, []);
    
    return flag;
    }


export default useCountriesFlag;