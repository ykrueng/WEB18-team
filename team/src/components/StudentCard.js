import React, { useState } from 'react'

export default ({ student }) => {
  const [isAbsent, setIsAbsent] = useState(true)

  const toggleAbsent = () => {
    setIsAbsent(!isAbsent)
  }

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {student.name}
      </div>
      <div onClick={ toggleAbsent }>
        {isAbsent ? 'Absent' : 'Present'}
      </div>
    </div>
  )
}