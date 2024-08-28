import { MEAL_API } from "@/constants/baseUrls";

type SingleRecipePageProps = {
    id: string | string[],
    baseUrl: string,
    }

export const getSingleRecipe = async (id: string | string[], baseUrl:string) => {
    const response = await fetch(`${baseUrl}lookup.php?i=${id}`);
    const data = await response.json();
    return data;
};

export const getRecipeCountries = async () => {
    const response = await fetch(`${MEAL_API}list.php?a=list`);
    const data = await response.json();
    return data;
}

export const getShinyCountryFlag= async (countryCode: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryCode}`);
    const data = await response.json();
    return data;
}