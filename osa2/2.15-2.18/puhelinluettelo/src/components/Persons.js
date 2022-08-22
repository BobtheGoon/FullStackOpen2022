import personService from '../services/personsData'

const Persons = ({persons}) => {
    const deleteButton = (person) => <button type='button' onClick={() => personService.deleteContact(person)}>delete</button>

    const content = persons.map(person => 
        (person.number) ?
            <div key={person.name}>
                {person.name} {person.number} {deleteButton(person)}
            </div>
            :
            <div key={person.name}>
                {person.name} {deleteButton(person)}
            </div>
        )
    
    return (
        <div>
            {content}
        </div>    
        )
    }

export default Persons