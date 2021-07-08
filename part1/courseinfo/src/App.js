import React from 'react'

const Header = (params) => {
  return (
    <h1>{params.course.name}</h1>
  )
}

const Content = (params) =>
{
  return (
    <>
      <Part name={params.course.parts[0].name} exercises={params.course.parts[0].exercises}/>
      <Part name={params.course.parts[1].name} exercises={params.course.parts[1].exercises}/>
      <Part name={params.course.parts[2].name} exercises={params.course.parts[2].exercises}/>
    </>
  )
}

const Part = (params) =>
{
  return (
    <p>{params.name} {params.exercises}</p>
  )
}

const Total = (params) => {
  return (
    <p>Number of exercises {params.course.parts[0].exercises + params.course.parts[1].exercises + params.course.parts[2].exercises}</p>
  )
}

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
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App