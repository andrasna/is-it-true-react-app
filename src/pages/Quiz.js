import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Quiz() {
  const numOfQuestions = 4
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  return (
    <main>
      <Outlet
        context={[
          numOfQuestions,
          [questions, setQuestions],
          [answers, setAnswers],
        ]}
      />
    </main>
  )
}

export default Quiz
