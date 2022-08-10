import { useState, useEffect } from 'react'
import axios from 'axios'

const COUNTRY_URL = 'https://restcountries.com/v3.1/all'

const App = () => {

  const [data, setData] = useState('')

  useEffect(() =>{
    axios
    .get(COUNTRY_URL)
    .then(response => {
      setData(response.data)
      })}, [])

  return(
    <div>Hello world</div>
  )

}

export default App;
