import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
  )    
}


const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad
  const average = (good + (neutral * 0) - bad) / total
  const positive = (good / total) * 100

  if(total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
    <table>
      <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='posiive' value={positive} sign='%' />
      </tbody>
    </table>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
} 

export default App