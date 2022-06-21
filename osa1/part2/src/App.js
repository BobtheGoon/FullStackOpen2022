import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  const allReviews = props.reviewProps
  console.log(allReviews)

  return (
    <div>
      <p>good {allReviews.goodReviews}</p>
      <p>neutral {allReviews.neutralReviews}</p>
      <p>bad {allReviews.badReviews}</p>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const reviews = {
      goodReviews: good,
      neutralReviews: neutral,
      badReviews: bad
    }

  const goodReview = () => {
    setGood(good + 1)
  }
  
  const neutralReview = () => {
    setNeutral(neutral + 1)
  }
  
  const badReview = () => {
    setBad(bad + 1)
  }

  console.log(good, neutral, bad)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodReview} text="good"/>
      <Button handleClick={neutralReview} text="neutral"/>
      <Button handleClick={badReview} text="bad"/>
      <h2>Statistics</h2>
      <Display reviewProps={reviews}/>
    </div>
  )
}

export default App