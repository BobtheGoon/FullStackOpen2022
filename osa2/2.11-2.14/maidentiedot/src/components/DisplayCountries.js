import Country from "./Country";
import CountryList from "./CountryList";

const DisplayCountries = ({searchChars, countries, showCountry}) => {

    //Filter over the countries data and find matches corresponding to search charecters
    const searchResults = (searchChars, countries) => {
        const searchResult = countries.filter(country => country.name.common.toLowerCase().includes(searchChars.toLowerCase()));
        return searchResult
      }

    //If a search is initialized, get search results
    if (searchChars) {
      const foundCountries = searchResults(searchChars, countries)

      //If we find 10 or less but more than 1, return all found countries
      if (foundCountries.length <= 10 && foundCountries.length > 1) {
        return <CountryList countries={foundCountries} showCountry={showCountry}></CountryList>
        }

      //If we find only 1 country, display its information such as name, capita, area, languages, flag
      else if (foundCountries.length === 1) {
        return <Country country={foundCountries[0]}></Country>
      }

      //If we find more than 10 countries, ask for more filtering
      else if (foundCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>
        }

      //Handle no matches found
      else {
        return <div>No matches found</div>
        }
      }
    }

export default DisplayCountries