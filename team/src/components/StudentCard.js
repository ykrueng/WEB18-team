import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default ({ student }) => {
  const [isAbsent, setIsAbsent] = useState(true)

  const toggleAbsent = () => {
    setIsAbsent(!isAbsent)
  }

  return (
    <Card color={isAbsent ? 'pink' : 'teal' }>
      <Card.Content>
        <Card.Header onClick={toggleAbsent}>
          <Icon color={isAbsent ? 'pink' : 'teal'} name='user circle' />
          {student.name}
        </Card.Header>
        <Card.Meta>
          <a href={student.gitHub} rel='noopener noreferrer' target='_blank'>
            <Icon name='github alternate' />
          </a>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}