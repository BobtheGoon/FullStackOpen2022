const Country = ({country}) => {

    const foundLanguages = []
    Object.keys(country.languages).forEach(language => foundLanguages.push(country.languages[language]))

    return (
        <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>

        <h3>languages</h3>
        <ul>
            {foundLanguages.map(language => <li key={language}>{language}</li>)}
        </ul>

        <img src={country.flags['png']}></img>

        </div>
        )
    }

export default Country