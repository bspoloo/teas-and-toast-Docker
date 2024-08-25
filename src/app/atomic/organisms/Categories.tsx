import useProduct from "@/app/hooks/useProducts";
import LinkMenu from "../atoms/LinkMenu";


type CategoriesProp = {
    url: string;
    categories: []
}

function Categories({ categories, url }: CategoriesProp) {

    return (
        <div className="flex flex-row gap-5 flex-wrap items-center justify-center mt-9 mb-9 ">
            {categories?.length > 0 ?
                categories?.map((category: any, index: any) => (
                    <LinkMenu
                        key={index}
                        url={url + category.strCategory}
                        title={category.strCategory}
                        className="rounded-full font-bold p-4 border-2 border-[#2C2F24] text-[#2C2F24] hover:bg-[#AD343E] hover:text-white hover:border-[#AD343E]" />
                )) : (
                    <div>
                        Loading categories...
                    </div>
                )}
        </div>
    );
}

export default Categories;