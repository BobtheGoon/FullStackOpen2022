const Persons = ({persons}) => {
    const content = persons.map(person => 
        (person.number) ?
            <div key={person.name}>
                {person.name} {person.number}
            </div>
            :
            <div key={person.name}>
                {person.name}
            </div>
        )
    
    return (
        <div>
            {content}
        </div>    
        )
    }

export default Persons