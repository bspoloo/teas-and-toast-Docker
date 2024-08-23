type SingleRecipePageProps = {
    id: string | string[],
    baseUrl: string,
    }

export const getSingleRecipe = async (id: string | string[], baseUrl:string) => {
    const response = await fetch(`${baseUrl}lookup.php?i=${id}`);
    const data = await response.json();
    return data;
};
