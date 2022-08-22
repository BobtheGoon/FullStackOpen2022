import Persons from "./Persons";


const DisplayPersons = ({searchChars, persons}) => {
    const searchPersons = (searchChars) => {
        const searchResult = persons.filter(person => person.name.toLowerCase().includes(searchChars.toLowerCase()));
        return searchResult
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

    return personsNumbers
}

export default DisplayPersons