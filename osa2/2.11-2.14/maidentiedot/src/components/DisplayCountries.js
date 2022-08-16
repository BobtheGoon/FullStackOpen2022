const DisplayCountries = ({searchChars, countries}) => {

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
        return (
          foundCountries.map(country => 
            <div key={country.name.common}>{country.name.common}</div>
            )
          )
        }

      else if (foundCountries.length === 1) {
        const foundCountry = foundCountries[0]

        const foundLanguages = []
        Object.keys(foundCountry.languages).forEach(language => foundLanguages.push(foundCountry.languages[language]))

        return (
            <div>
              <h2>{foundCountry.name.common}</h2>
              <p>capital {foundCountry.capital}</p>
              <p>area {foundCountry.area}</p>

              <h3>languages</h3>
              <ul>
                {foundLanguages.map(language => <li key={language}>{language}</li>)}
              </ul>

              <img src={foundCountry.flags['png']}></img>

            </div>
          )
      }

      else if (foundCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>
        }

      else {
        return <div>No matches found</div>
        }
      }
    }

export default DisplayCountries