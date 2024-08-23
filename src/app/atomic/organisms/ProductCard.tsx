import ImageVector from "../atoms/ImageVector";
import CardPresentation from "../molecules/CardPresentation";

type ProductCardProps = {
    id: number;
    name: string;
    image: string;
    category: string;
    singleRecipeRoute: string;
}

function ProductCard({ id, name, image, category,singleRecipeRoute }: ProductCardProps) {
    return (

        <div className=" flex flex-col items-center border border-gray-200 rounded-2xl text-center cursor-pointer hover:bg-[#DBDFD0] hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            <a href={singleRecipeRoute + id}>
                <div className="flex items-center justify-center">
                    <ImageVector url={image} alt="" width={300} height={0} classname="rounded-t-2xl" />
                </div>

                <CardPresentation subtitle={name} description={category} />
            </a>
        </div>
    );
}

export default ProductCard;