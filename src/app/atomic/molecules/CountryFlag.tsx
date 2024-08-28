'use client';
import useCountriesFlag from '../../hooks/useContriesFlag';

// Cambia la forma en que se recibe el prop
function CountryFlag({ countryName }: { countryName: string }) {
  const countryFlag = useCountriesFlag(countryName);
  return (
    <div>
      <img src={`${countryFlag}`} alt={`Flag of ${countryName}`} />
    </div>
  );
}

export default CountryFlag;