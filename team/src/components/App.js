import React from 'react'
import StudentCard from './StudentCard'

const students = [
  {
    name: 'Anthony'
  },
  {
    name: 'Dayton'
  },
  {
    name: 'Stephanie'
  },
  {
    name: 'Cameron'
  },
  {
    name: 'Christian'
  },
  {
    name: 'Jeff'
  },
  {
    name: 'Mario'
  },
  {
    name: 'Omar'
  },
  {
    name: 'Will'
  },
]

export default () => {
  return (
    <div className="App">
      App
      {
        students && students.map(
          student => <StudentCard student={student} />
        )
      }
    </div>
  )
}