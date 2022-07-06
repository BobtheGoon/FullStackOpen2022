const Total = ({parts}) => {
    console.log(parts)
    
    let total = 0

    parts.forEach(element => {
      total += element.exercises
    });

    //const total = parts.reduce((current, previous) => current+previous)
    //console.log(total)
    
    return (
      <div>
       <b>total of {total} exercises</b>
      </div>
    )
  }

export default Total