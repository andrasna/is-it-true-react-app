import { useOutletContext, Navigate } from 'react-router-dom'
import Link from '../../link/Link'
import styles from './Result.module.css'
import { decode } from 'html-entities'

function Result() {
  const [{ fetching, started, questions, answers }, quizAction] =
    useOutletContext()

  const correctAnswers = questions.map((a) => a.correct_answer)
  const scores = correctAnswers.map((a, i) => (a === answers[i] ? 1 : 0))
  const scoresSum = scores.reduce((a, b) => {
    return a + b
  }, 0)
  const scoreToEmoji = (score) => (score === 0 ? <>&#10006;</> : <>&#10004;</>)

  {
    if (!fetching && !started) {
      return <Navigate to="/" />
    }
  }

  return (
    <>
      <h1 className="text-center">Thanks for playing!</h1>

      <div className={styles.card}>
        <h2 className="text-center">
          You scored
          <br />
          {`${scoresSum} / ${scores.length}`}
        </h2>

        <ol>
          {questions.map((a, i) => {
            return (
              <li key={i}>
                <div className={styles.item}>
                  <p>{decode(a.question)}</p>

                  <div className={styles.compare}>
                    <div>{scoreToEmoji(scores[i])}</div>

                    <div>
                      <p>
                        Your answer:
                        <br />
                        <strong>{answers[i]}</strong>
                      </p>
                    </div>

                    <div>
                      <p>
                        Correct answer:
                        <br />
                        <strong>{correctAnswers[i]}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <footer className="text-center">
        <p>Wanna play again?</p>

        <Link to="../play" onClick={() => quizAction({ type: 'fetch' })}>
          Let&apos;s play
        </Link>
      </footer>
    </>
  )
}

export default Result
