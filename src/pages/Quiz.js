import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Quiz() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  return (
    <main>
      <Outlet
        context={[
          [questions, setQuestions],
          [answers, setAnswers],
        ]}
      />
    </main>
  )
}

export default Quiz
