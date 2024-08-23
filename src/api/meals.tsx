import { MEAL_API } from "@/constants/baseUrls";

export const getSingleMeal = async (id: string | string[]) => {
    const response = await fetch(`${MEAL_API}lookup.php?i=${id}`);
    const data = await response.json();
    return data;
};
