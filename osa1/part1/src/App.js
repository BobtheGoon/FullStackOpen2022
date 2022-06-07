const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const part1 = props.parts.parts[0]
  const part2 = props.parts.parts[1]
  const part3 = props.parts.parts[2]

  return (
    <div>
        <Part part={part1.name} exercise={part1.exercises}/>
        <Part part={part2.name} exercise={part2.exercises}/>
        <Part part={part3.name} exercise={part3.exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    </div>
  )
}


export default App