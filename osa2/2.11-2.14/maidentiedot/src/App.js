import { useState, useEffect } from 'react'
import axios from 'axios'

import root from './index.js'
import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries'
import Country from './components/Country'

const COUNTRY_URL = 'https://restcountries.com/v3.1/all'

const App = () => {

  const [data, setData] = useState([])
  const [searchChars, setSearch] = useState('')


  useEffect(() =>{
    axios
    .get(COUNTRY_URL)
    .then(response => {
      setData(response.data)
      })}, [])


  const showCountry = (country) => {
    console.log(country)

    root.render(
      <div>
        <Filter searchChars={searchChars} change={handleSearchChange}></Filter>
        <Country country={country}></Country>
      </div>
      );
    }

  //Update search on change
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return(
    <div>
      <Filter searchChars={searchChars} change={handleSearchChange}></Filter>
      <DisplayCountries searchChars={searchChars} countries={data} showCountry={showCountry}></DisplayCountries>
    </div>
  )

}

export default App;

