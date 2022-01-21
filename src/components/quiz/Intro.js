import { Link } from 'react-router-dom'
import { quizSettings } from '../../settings.js'

function Intro() {
  return (
    <>
      <h1>Hello, welcome to this Quiz.</h1>

      <h2>Rules:</h2>

      <ul>
        <li>
          There will be {quizSettings.numOfQuestions} statements, one at a time.
        </li>
        <li>You have to decide if a statement is true or false.</li>
        <li>You can not skip questions or go back.</li>
        <li>
          If you refresh the browser, your answers will be lost, and a new game
          will start.
        </li>
      </ul>

      <p>Simple enough? Are you ready?</p>

      <Link to="play">Let&apos;s play</Link>
    </>
  )
}

export default Intro
