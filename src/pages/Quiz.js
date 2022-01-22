import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Wrapper from '../components/layout/Wrapper'
import { quizSettings } from '../settings'
const { numOfQuestions } = quizSettings

function Quiz() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    async function fetchQuestions() {
      const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&type=boolean`
      const response = await fetch(url)
      const { results } = await response.json()
      setQuestions(results)
    }

    fetchQuestions()
  }, [])

  return (
    <Wrapper>
      <main>
        <Outlet context={[questions, [answers, setAnswers]]} />
      </main>
    </Wrapper>
  )
}

export default Quiz
