import { quizSettings } from '../../../settings'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../../button/Button'
import styles from './Play.module.css'

function Play() {
  const navigate = useNavigate()
  const [answer, setAnswer] = useState(null)
  const [[questions, setQuestions], [answers, setAnswers]] = useOutletContext()

  useEffect(() => {
    async function fetchQuestions() {
      const url = `https://opentdb.com/api.php?amount=${quizSettings.numOfQuestions}&type=boolean`
      const response = await fetch(url)
      const { results } = await response.json()
      setQuestions(results)
    }

    fetchQuestions()
  }, [])

  useEffect(() => {
    if (answers.length === quizSettings.numOfQuestions) {
      navigate('../result')
      return
    }

    setAnswer(null)
  }, [answers])

  function handleAnswerSubmit() {
    if (answer === null) {
      return
    }

    setAnswers(() => [...answers, answer])
  }

  function handleAnswerSelection(e) {
    setAnswer(e.currentTarget.value)
  }

  return (
    <>
      <div className={styles.info}>
        <p>Category: {questions[answers.length]?.category}</p>

        <p>Question {`${answers.length + 1} / ${questions?.length}`}</p>
      </div>

      <div className={styles.question}>
        <p>{questions[answers.length]?.question}</p>
      </div>

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
