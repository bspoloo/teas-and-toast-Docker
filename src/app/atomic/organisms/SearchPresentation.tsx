import TextContent from "../atoms/TextContent";
import SubTitle from "../atoms/SubTitle";

type searchProps = {
    title: string,
    text: string
}

function SearchPresentation({title, text}: searchProps) {
    const className = 'text-5xl md:text-5xl text-center font-semibold';
    return (
        <div>
            <SubTitle TextContent={title} className={className} />
            <TextContent text={text} className="text-center mt-8 text-sm text-[#495460]" />
        </div>
    );
}

export default SearchPresentation;