import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    //if (persons.map(person => person.name === newName)) {console.log('exists')}
    //tämä koodi palauttaa aina true, korjaa

    const newPerson = {
      name: newName
    }

    console.log(newPerson)
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleInputChange = (e) => {
    setNewName(e.target.value)
  }

  console.log(persons)

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
      ...
    </div>
  )

}

export default App
