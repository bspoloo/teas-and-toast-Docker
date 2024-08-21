import { COCKTAIL_API } from "@/constants/baseUrls";

export const getSingleCocktail = async (id: string) => {
    const response = await fetch(`${COCKTAIL_API}lookup.php?iid=${id}`);
    const data = await response.json();
    return data;
};
