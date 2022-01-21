import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Wrapper from '../components/layout/Wrapper'

function Quiz() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  return (
    <Wrapper>
      <main>
        <Outlet
          context={[
            [questions, setQuestions],
            [answers, setAnswers],
          ]}
        />
      </main>
    </Wrapper>
  )
}

export default Quiz
