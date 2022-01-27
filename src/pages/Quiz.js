import { Outlet } from 'react-router-dom'
import { useEffect, useReducer } from 'react'
import Wrapper from '../components/layout/Wrapper'
import { quizSettings } from '../settings'
const { numOfQuestions } = quizSettings

const initialState = {
  started: false,
  questions: [],
  answers: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'questionsFetched':
      return { ...state, questions: action.payload, started: true }
    case 'answerSubmission':
      return { ...state, answers: [...state.answers, action.payload] }
    case 'reset':
      return initialState
  }
}

function Quiz() {
  const [quiz, quizAction] = useReducer(reducer, initialState)

  useEffect(() => {
    if (quiz.started) {
      return
    }

    async function fetchQuestions() {
      const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&type=boolean`
      const response = await fetch(url)
      const { results } = await response.json()
      quizAction({ type: 'questionsFetched', payload: results })
    }

    fetchQuestions()
  }, [quiz])

  return (
    <Wrapper>
      <main>
        <Outlet context={[quiz, quizAction]} />
      </main>
    </Wrapper>
  )
}

export default Quiz
