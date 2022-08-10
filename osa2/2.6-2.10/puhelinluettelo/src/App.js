import { useState } from 'react'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import DisplayPersons from './components/DisplayPersons'

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


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchChars={searchChars} change={handleSearchChange}/>

      <h2>add a new</h2>

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}/>


      <h2>Numbers</h2>

      <DisplayPersons searchChars={searchChars} persons={persons} />

    </div>
  )

}

export default App
