import { useOutletContext } from 'react-router-dom'
import styles from './Result.module.css'
import { decode } from 'html-entities'

function Result() {
  const [questionObjects, [answers]] = useOutletContext()

  const correctAnswers = questionObjects.map((a) => a.correct_answer)
  const scores = correctAnswers.map((a, i) => (a === answers[i] ? 1 : 0))
  const scoresSum = scores.reduce((a, b) => a + b)
  const scoreToEmoji = (score) => (score === 0 ? <>&#10006;</> : <>&#10004;</>)

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
          {questionObjects.map((a, i) => {
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

        <a href="/quiz/play">Let&apos;s play</a>
      </footer>
    </>
  )
}

export default Result
