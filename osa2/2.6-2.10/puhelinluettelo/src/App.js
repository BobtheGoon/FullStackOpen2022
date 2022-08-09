import { useState } from 'react'

import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')


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

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>

      <h2>Numbers</h2>
      <Persons persons={persons}/>

    </div>
  )

}

export default App
