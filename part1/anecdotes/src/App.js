import React, { useState } from 'react'

const App = () => {
  //note: it is assumed that the number of anecdotes won't change, hence the use of an hardcoded '7' when required.

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(7).fill(0))
  let mostVotedAnecdoteIndex = 0

  const getRandomAnecdote = () => {
    //generate new random value
    const randomValue = Math.floor(Math.random() * 7)

    //check if the new value is the same as the previous one
    if(randomValue === selected)
    {
      getRandomAnecdote()
    }
    else
    {
      setSelected(randomValue)
    }
  }

  const voteAnecdote = () => {
    const temp = [...points]
    temp[selected]++
    setPoints(temp) 
  }

  //find index of the most voted anecdote
  mostVotedAnecdoteIndex = points.indexOf(Math.max(...points))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text = {anecdotes[selected]} points = {points[selected]}/>
      <button onClick={() => getRandomAnecdote()}>next anecdote</button>
      <button onClick={() => voteAnecdote()}>vote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote text = {anecdotes[mostVotedAnecdoteIndex]} points = {points[mostVotedAnecdoteIndex]}/>
    </div>
  )
}

const Anecdote = (props) => {
  return <div>
      <div>{props.text}</div>
      <div>{`has ${props.points} votes`}</div>
  </div>

}

export default App