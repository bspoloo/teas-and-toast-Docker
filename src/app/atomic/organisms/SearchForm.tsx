import TextContent from "../atoms/TextContent";
import Input from "../atoms/Input";

type FormSearchProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchForm({ handleChange}:FormSearchProps) {

    return (
        <div className="flex flex-col p-8 bg-white shadow-lg rounded-3xl gap-5   md:w-1/3 h-auto ">
            <TextContent text="Insert the Ingredient: " className="block text-gray-700 text-sm font-bold mb-2" />

            <Input
                onChange={handleChange}
                placeholder="Insert the Ingredient"
                classname="w-full px-4 py-2 border border-[#DBDFD0] rounded-3xl focus:outline-none focus:ring-1 focus:ring-[#AD343E] focus:border-transparent"
                type="text" />
        </div>
    );
}

export default SearchForm;