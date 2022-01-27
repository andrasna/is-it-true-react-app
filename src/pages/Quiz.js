import { Outlet } from 'react-router-dom'
import { useEffect, useReducer } from 'react'
import Wrapper from '../components/layout/Wrapper'
import { quizSettings } from '../settings'
const { numOfQuestions } = quizSettings

const initialState = {
  fetching: false,
  started: false,
  questions: [],
  answers: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'fetch':
      return { ...initialState, fetching: true }
    case 'fetchingSuccessful':
      return {
        ...initialState,
        fetching: false,
        started: true,
        questions: action.payload,
      }
    case 'fetchingFailed':
      return { ...initialState, fetching: false }
    case 'submitAnswer':
      return { ...state, answers: [...state.answers, action.payload] }
    case 'reset':
      return initialState
  }
}

function Quiz() {
  const [quiz, quizAction] = useReducer(reducer, initialState)

  async function fetchQuestions() {
    const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&type=boolean`
    const response = await fetch(url)
    const { results } = await response.json()

    if (results.length === numOfQuestions) {
      quizAction({ type: 'fetchingSuccessful', payload: results })
    } else {
      quizAction({ type: 'fetchingFailed' })
    }
  }

  useEffect(() => {
    if (!quiz.fetching) {
      return
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
