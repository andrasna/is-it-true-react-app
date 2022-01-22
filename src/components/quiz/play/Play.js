import { quizSettings } from '../../../settings'
const { numOfQuestions } = quizSettings
import { useOutletContext, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../../button/Button'
import styles from './Play.module.css'
import { decode } from 'html-entities'

function Play() {
  const navigate = useNavigate()
  const [answer, setAnswer] = useState(null)
  const [questions, [answers, setAnswers]] = useOutletContext()

  function calcIndex() {
    return answers.length < numOfQuestions ? answers.length : numOfQuestions - 1
  }

  function handleAnswerSubmit() {
    if (answer === null) {
      return
    }

    if (answers.length < numOfQuestions) {
      setAnswers(() => [...answers, answer])
    }

    if (answers.length + 1 < numOfQuestions) {
      setAnswer(null)
    }
  }

  function handleAnswerSelection(e) {
    setAnswer(e.currentTarget.value)
  }

  function selectCorrectAnswer() {
    setAnswer(
      questions[calcIndex()].correct_answer === 'True' ? 'true' : 'false'
    )
  }

  return (
    <>
      {/* Progress bar */}
      <div
        onTransitionEnd={() => {
          if (numOfQuestions === answers.length) {
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
        <p>Category: {questions[calcIndex()]?.category}</p>
        <p>Question {`${calcIndex() + 1} / ${numOfQuestions}`}</p>
      </div>

      {/* The question */}
      <div className={styles.question}>
        <p>{decode(questions[calcIndex()]?.question)}</p>
        <span onClick={selectCorrectAnswer} className={styles.answer}>
          ?
        </span>
      </div>

      {/* True / False controls */}
      <div className={styles.radios}>
        <div>
          <input
            checked={answer === 'true'}
            type="radio"
            id="true"
            name="answer"
            value="true"
            onChange={handleAnswerSelection}
          />
          <label htmlFor="true">True</label>
        </div>

        <div>
          <input
            checked={answer === 'false'}
            type="radio"
            id="false"
            name="answer"
            value="false"
            onChange={handleAnswerSelection}
          />
          <label htmlFor="false">False</label>
        </div>
      </div>

      <div className={styles.submit}>
        <Button clickHandler={handleAnswerSubmit} isDisabled={answer === null}>
          Submit
        </Button>
      </div>
    </>
  )
}

export default Play
