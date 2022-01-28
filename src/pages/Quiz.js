import { Outlet } from 'react-router-dom'
import { useEffect, useReducer } from 'react'
import Wrapper from '../components/layout/Wrapper'
import { quizSettings } from '../settings'
const { numOfQuestions } = quizSettings

const initialState = {
  preFetching: false,
  starting: false,
  running: false,
  preFetchedQuestions: [],
  questions: [],
  answers: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'preFetch':
      return { ...state, preFetching: true }
    case 'preFetchSuccessful':
      return {
        ...state,
        isPreFetching: false,
        preFetchedQuestions: action.payload,
      }
    case 'preFetchFailed':
      return { ...state, preFetching: false }
    case 'start':
      return { ...state, starting: true }
    case 'startSuccessful':
      return {
        ...initialState,
        starting: false,
        running: true,
        questions: action.payload,
      }
    case 'startFailed':
      return { ...initialState, starting: false }
    case 'submitAnswer':
      return { ...state, answers: [...state.answers, action.payload] }
    case 'reset':
      return initialState
  }
}

async function fetchQuestions() {
  const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&type=boolean`

  try {
    const response = await fetch(url)
    const { results } = await response.json()
    return results
  } catch (e) {
    console.error(e)
    return []
  }
}

function Quiz() {
  const [quiz, quizAction] = useReducer(reducer, initialState)

  async function start() {
    if (quiz.preFetchedQuestions.length === numOfQuestions) {
      quizAction({
        type: 'startSuccessful',
        payload: quiz.preFetchedQuestions,
      })
      return
    }

    const results = await fetchQuestions()

    if (results.length === numOfQuestions) {
      quizAction({ type: 'startSuccessful', payload: results })
    } else {
      quizAction({ type: 'startFailed' })
    }
  }

  async function preFetch() {
    const results = await fetchQuestions()

    if (results.length === numOfQuestions) {
      quizAction({ type: 'preFetchSuccessful', payload: results })
    } else {
      quizAction({ type: 'preFetchFailed' })
    }
  }

  useEffect(() => {
    if (quiz.starting) {
      start()
    }

    if (quiz.preFetching) {
      preFetch()
    }
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
