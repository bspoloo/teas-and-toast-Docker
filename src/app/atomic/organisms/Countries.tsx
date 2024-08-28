import LinkMenu from "../atoms/LinkMenu";
type CountriesProp = {
    url: string;
    countries: string[];
}

function Countries({ countries, url }: CountriesProp) {
    return (
      <div className="flex flex-row gap-5 flex-wrap  gap-y-10 items-center justify-center mt-9 mb-9 ">
        {countries?.length > 0 ? (
          countries.map((country: any, index: any) => (
            <div key={index}>
              <LinkMenu
                url={url+country.strArea}
                title={country.strArea}
                className="rounded-full font-bold p-4 border-2 border-[#2C2F24] text-[#2C2F24] hover:bg-[#AD343E] hover:text-white hover:border-[#AD343E]"
              />
            </div>
          ))
        ) : (
          <div>Loading countries...</div>
        )}
      </div>
    );
  }

export default Countries;