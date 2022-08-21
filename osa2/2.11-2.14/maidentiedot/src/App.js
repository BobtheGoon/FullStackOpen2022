import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries'

const COUNTRY_URL = 'https://restcountries.com/v3.1/all'

const App = () => {

  const [data, setData] = useState([])
  const [searchChars, setSearch] = useState('')


  const showCountry = (country) => {
    const countryData = []
    countryData.push(country)
    console.log(country)
    setData(countryData)
    }


  useEffect(() =>{
    axios
    .get(COUNTRY_URL)
    .then(response => {
      setData(response.data)
      })}, [])


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

