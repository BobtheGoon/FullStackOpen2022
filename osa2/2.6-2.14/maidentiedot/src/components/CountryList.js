const CountryList = ({countries, showCountry}) => {

    return (
        countries.map(country => 
            <div key={country.name.common}>
                <div>{country.name.common} <button onClick={() => showCountry(country)}>show</button></div>
            </div>
          )
        )
    }

export default CountryList