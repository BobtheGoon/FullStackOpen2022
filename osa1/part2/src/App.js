import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  const goodies = props.reviewProps.goodReviews
  const neutries = props.reviewProps.neutralReviews
  const baddies = props.reviewProps.badReviews

  return (
    <div>
      <p>good {goodies}</p>
      <p>neutral {neutries}</p>
      <p>bad {baddies}</p>
    </div>
  )
}

const Statistics = (props) => {
  const goodies = props.statProps.goodReviews
  const neutries = props.statProps.neutralReviews
  const baddies = props.statProps.badReviews

  const total = goodies + neutries + baddies
  const average = (goodies + neutries*0 + baddies*-1)/total
  const positive = goodies/total*100

  return (
    <div>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
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

  let noStats = false;
  if (good === 0 && neutral === 0 && bad === 0) {
    noStats = true;
  }

  if (noStats) {
  return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={goodReview} text="good"/>
        <Button handleClick={neutralReview} text="neutral"/>
        <Button handleClick={badReview} text="bad"/>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={goodReview} text="good"/>
        <Button handleClick={neutralReview} text="neutral"/>
        <Button handleClick={badReview} text="bad"/>
        <h2>Statistics</h2>
        <Display reviewProps={reviews}/>
        <Statistics statProps={reviews}/>
      </div>
    )
}

export default App