import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const add = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const updateNumber = (person, newNumber) => {
    console.log(person)
    console.log(newNumber)
    const newInfo = {...person, number: newNumber}
    axios.put(baseUrl+'/'+person.id, newInfo)
}

const deleteContact = (person) => {
    console.log(person)
    if (window.confirm(`Delete ${person.name}?`)) {
        axios.delete(baseUrl+'/'+person.id)
        window.location.reload()
    }
}

export default {add, deleteContact, updateNumber}