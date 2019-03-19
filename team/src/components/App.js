import React from 'react'
import { Container, Header, Card } from 'semantic-ui-react'

import StudentCard from './StudentCard'


const students = [
  {
    name: 'Anthony',
    gitHub: 'https://github.com/divbySeptember'
  },
  {
    name: 'Dayton',
    gitHub: 'https://github.com/DaytonS3'
  },
  {
    name: 'Stephanie',
    gitHub: 'https://github.com/StephanieRP'
  },
  {
    name: 'Cameron',
    gitHub: 'https://github.com/cammac725'
  },
  {
    name: 'Christian',
    gitHub: 'https://github.com/chrisipanaque'
  },
  {
    name: 'Jeff',
    gitHub: 'https://github.com/lappjeff'
  },
  {
    name: 'Mario',
    gitHub: 'https://github.com/MAmaya1'
  },
  {
    name: 'Omar',
    gitHub: 'https://github.com/ok1a'
  },
  {
    name: 'Will',
    gitHub: 'https://github.com/brellin'
  },
]

export default () => {
  return (
    <Container text>
      <Header as='h1' textAlign='center' style={{ margin: '3rem' }}>
        My WEB-18 Team
      </Header>
      <Card.Group>
        {
          students && students.map(
            student => <StudentCard key={student.name} student={student} />
          )
        }
      </Card.Group>
    </Container>
  )
}