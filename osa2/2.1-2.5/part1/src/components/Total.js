const Total = ({parts}) => {

    let total = parts.reduce((previous, current) => previous + current.exercises, 0)
    
    return (
      <div>
        <b>total of {total} exercises</b>
      </div>
    )
  }

export default Total