import TextContent from "../atoms/TextContent";
import SubTitle from "../atoms/SubTitle";

function SearchPresentation() {
    const className = 'text-5xl md:text-5xl text-center font-semibold';
    return (
        <div>
            <SubTitle TextContent="Ingredients" className={className} />
            <TextContent text="Add ingredients to find dishes or cocktails that match your search." className="text-center mt-8 text-sm text-[#495460]" />
        </div>
    );
}

export default SearchPresentation;