import Link from '../../link/Link'
import { quizSettings } from '../../../settings.js'
import styles from './Intro.module.css'

function Intro() {
  return (
    <div className={styles.intro}>
      <h1 className="text-center">Hello, welcome to this Quiz.</h1>

      <div className={styles.rules}>
        <h2 className="text-center">Rules</h2>

        <ol className="list-lower-latin">
          <li>
            There will be {quizSettings.numOfQuestions} statements, one at a
            time.
          </li>
          <li>You have to decide if a statement is true or false.</li>
          <li>You can not skip questions or go back.</li>
          <li>
            If you refresh the browser, your answers will be lost, and a new
            game will start.
          </li>
        </ol>
      </div>

      <footer className="text-center">
        <p>Simple enough? Are you ready?</p>

        <Link to="play">Let&apos;s play</Link>
      </footer>
    </div>
  )
}

export default Intro
