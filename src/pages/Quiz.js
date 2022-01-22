import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Wrapper from '../components/layout/Wrapper'
import { quizSettings } from '../settings'
const { numOfQuestions } = quizSettings

function Quiz() {
  const [questionObjects, setQuestionObjects] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    async function fetchQuestions() {
      const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&type=boolean`
      const response = await fetch(url)
      const { results } = await response.json()
      setQuestionObjects(results)
    }

    fetchQuestions()
  }, [])

  return (
    <Wrapper>
      <main>
        <Outlet context={[questionObjects, [answers, setAnswers]]} />
      </main>
    </Wrapper>
  )
}

export default Quiz
