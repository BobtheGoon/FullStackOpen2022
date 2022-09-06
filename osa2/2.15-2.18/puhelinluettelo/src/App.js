import { useState, useEffect } from 'react'

import './index.css'
import personService from './services/personService'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import DisplayPersons from './components/DisplayPersons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [searchChars, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
    }, [])


  const addPerson = (e) => {
    e.preventDefault()

    //Check if the person already exists in persons
    const found = persons.find(person => newName === person.name);

    if (found) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService.updateNumber(found, newNumber)
      }
      return
    }

    //Create a new person object
    const newPerson = {
      name: newName
    }
    
    //If newNumber is set, assign that number to the object
    if (newNumber) {
      Object.assign(newPerson, {number: newNumber})}

    
    //Save the new person into the database, set person to state and reset newName and newNumber
    personService.add(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNumber('')
        setErrorMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setErrorMessage(null)
          }, 5000)
          }
        )

      .catch(error => {
        if (error.response.data.error) {
          setErrorMessage(error.response.data.error)
          setTimeout(() => {
            setErrorMessage(null)
            }, 5000) 
          }

        else if (error.response) {
          setErrorMessage('Name or number is not of required length')
          setTimeout(() => {
            setErrorMessage(null)
            }, 5000) 
          }
          }
        )
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

      <Notification message={errorMessage} />

      <Filter searchChars={searchChars} change={handleSearchChange} />

      <h2>add a new</h2>

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />


      <h2>Numbers</h2>

      <DisplayPersons searchChars={searchChars} persons={persons} />

    </div>
  )

}

export default App
