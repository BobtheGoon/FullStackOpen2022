import { useState } from 'react'

import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const found = persons.find(person => newName === person.name);

    if (found) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }


  const handleInputChange = (e) => {
    setNewName(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Persons persons={persons}/>

    </div>
  )

}

export default App
