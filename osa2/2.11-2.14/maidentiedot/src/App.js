import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries'

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

  //Update search on change
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  console.log(data)

  return(
    <div>
      <Filter searchChars={searchChars} change={handleSearchChange}></Filter>

      <DisplayCountries searchChars={searchChars} countries={data}></DisplayCountries>
    </div>
  )

}

export default App;
