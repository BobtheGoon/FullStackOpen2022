import { useState } from 'react'

import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [searchChars, setSearch] = useState('')


  const addPerson = (e) => {
    e.preventDefault()

    //Check if the person already exists in persons
    const found = persons.find(person => newName === person.name);

    if (found) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    //Create a new person object
    const newPerson = {
      name: newName
    }
    
    //If newNumber is set, assign that number to the object
    if (newNumber) {
      Object.assign(newPerson, {number: newNumber})}

    //Set the new person into the persons state and reset newName and newNumber
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNumber('')
  }


  const searchPersons = (searchChars) => {
    const searchResult = persons.filter(person => person.name.toLowerCase().includes(searchChars.toLowerCase()));
    return searchResult
  }


  //Update name on change
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }


  //Update number on change
  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }


  //Update search on change
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }


  let personsNumbers = 
  <div>
    <Persons persons={persons}/>
  </div>


  if (searchChars) {
    const foundPersons = searchPersons(searchChars)
    personsNumbers = 
      <div>
        <Persons persons={foundPersons}/>
      </div>
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <div>filter shown with <input value={searchChars} onChange={handleSearchChange}></input></div>

      <h2>add a new</h2>

      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>

      <h2>Numbers</h2>
      <div>
        {personsNumbers}
      </div>

    </div>
  )

}

export default App
