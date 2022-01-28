import { useState } from 'react'
import { quizSettings } from '../../../settings'
const { numOfQuestions } = quizSettings
import { useOutletContext, useNavigate, Navigate } from 'react-router-dom'
import Button from '../../button/Button'
import styles from './Play.module.css'
import { decode } from 'html-entities'

function Play() {
  const navigate = useNavigate()
  const [{ isStarting, started, questions, answers }, quizAction] =
    useOutletContext()
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  if (!isStarting && !started) {
    return <Navigate to="/" />
  }

  const index = Math.min(answers.length, numOfQuestions - 1)
  const allAnswered = answers.length === numOfQuestions
  const lastAnswer = answers.length + 1 === numOfQuestions

  function handleSubmitAnswer() {
    if (selectedAnswer === null || allAnswered) {
      return
    }

    quizAction({ type: 'submitAnswer', payload: selectedAnswer })

    if (!lastAnswer) {
      setSelectedAnswer(null)
    }
  }

  function handleAnswerSelection(e) {
    setSelectedAnswer(e.currentTarget.value)
  }

  function handleCorrectAnswerSelection() {
    setSelectedAnswer(questions[index].correct_answer)
  }

  return (
    <>
      {/* Progress bar */}
      <div
        onTransitionEnd={() => {
          if (allAnswered) {
            navigate('../result')
          }
        }}
        className={styles.progress}
        style={{
          width: `${(answers.length / numOfQuestions) * 100}%`,
        }}
      ></div>

      {/* Info section at the top of the quiz */}
      <div className={styles.info}>
        <p>Category: {questions[index]?.category}</p>
        <p>
          Question
          <span className="whitespace-nowrap">
            {` ${index + 1} / ${numOfQuestions}`}
          </span>
        </p>
      </div>

      {/* The question */}
      <div className={`text-center ${styles.card}`}>
        <p>{decode(questions[index]?.question)}</p>

        <span
          onClick={handleCorrectAnswerSelection}
          className={styles.questionMark}
        >
          ?
        </span>
      </div>

      {/* True / False controls */}
      <div className={styles.radios}>
        <div>
          <input
            checked={selectedAnswer === 'True'}
            type="radio"
            id="true"
            name="answer"
            value="True"
            onChange={handleAnswerSelection}
          />
          <label htmlFor="true">True</label>
        </div>

        <div>
          <input
            checked={selectedAnswer === 'False'}
            type="radio"
            id="false"
            name="answer"
            value="False"
            onChange={handleAnswerSelection}
          />
          <label htmlFor="false">False</label>
        </div>
      </div>

      <div className="text-center">
        <Button
          clickHandler={handleSubmitAnswer}
          isDisabled={selectedAnswer === null}
        >
          Submit
        </Button>
      </div>
    </>
  )
}

export default Play
