import initialState from './initial-state'

function reducer(state, action) {
  switch (action.type) {
    case 'preFetch':
      return { ...state, preFetching: true }
    case 'preFetchSuccessful':
      return {
        ...state,
        preFetching: false,
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

export default reducer
