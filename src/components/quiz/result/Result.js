import { useOutletContext } from 'react-router-dom'
import styles from './Result.module.css'
import { decode } from 'html-entities'

function Result() {
  const [questions, [answers]] = useOutletContext()

  return (
    <div className={styles.wrapper}>
      <h1 className="text-center">Thanks for playing!</h1>

      <div className={styles.result}>
        <h2 className="text-center">Result</h2>

        <ol>
          {questions.map((a, i) => {
            return (
              <li key={i}>
                {decode(a.question)}
                {answers[i]}
              </li>
            )
          })}
        </ol>
      </div>

      <footer className="text-center">
        <p>Wanna play again?</p>

        <a href="/quiz/play">Let&apos;s play</a>
      </footer>
    </div>
  )
}

export default Result
