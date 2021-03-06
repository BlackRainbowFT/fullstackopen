import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + neutral + bad
  const average = (good - bad) / all //good: 1, neutral: 0, bad: -1
  const positivePercentage = (good / all) * 100

  if (all > 0) {
    return <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positivePercentage + "%"} />
      </tbody>
    </table>
  }
  else {
    return <div>No feedback given</div>
  }
}

const Statistic = (props) => <tr>
  <td>{props.text}</td>
  <td>{props.value}</td>
</tr>

export default App