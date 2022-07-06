import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({course}) => {

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
        </div>
    )
}

//            <Total parts={course}/>

export default Course