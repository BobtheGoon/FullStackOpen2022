import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
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
      <StatisticsLine text="good" value={goodies} />
      <StatisticsLine text="neutral" value={neutries} />
      <StatisticsLine text="bad" value={baddies} />
      <StatisticsLine text="total" value={total} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
    </div>
  )
}

const StatisticsLine = (props) => <p>{props.text} {props.value}</p>


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
        <Statistics statProps={reviews}/>
      </div>
    )
}

export default App