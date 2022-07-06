const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
      </div>
    )
  }

export default Total