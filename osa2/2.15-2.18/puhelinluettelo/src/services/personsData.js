import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const updateNumber = (person, newNumber) => {
    console.log(newNumber)
    const newInfo = {...person, number: newNumber}
    axios.put(baseUrl+'/'+person.id, newInfo)
}

const deleteContact = (person) => {
    console.log(person)
    if (window.confirm(`Delete ${person.name}?`)) {
        const request = axios.delete(baseUrl+'/'+person.id)
                        .catch(error => {console.log(`Information on ${error} has already been removed from the server`)})
        //window.location.reload()
    }
}

export default {getAll, add, deleteContact, updateNumber}