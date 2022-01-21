import { useOutletContext, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../button/Button'

function Play() {
  const navigate = useNavigate()
  const [answer, setAnswer] = useState(null)
  const [numOfQuestions, [questions, setQuestions], [answers, setAnswers]] =
    useOutletContext()

  useEffect(() => {
    async function fetchQuestions() {
      const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&type=boolean`
      const response = await fetch(url)
      const { results } = await response.json()
      setQuestions(results)
    }

    fetchQuestions()
  }, [])

  useEffect(() => {
    if (answers.length === numOfQuestions) {
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
      <p>Category: {questions[answers.length]?.category}</p>

      <p>Question {`${answers.length + 1} / ${questions?.length}`}</p>

      <p>{questions[answers.length]?.question}</p>

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

      <Button clickHandler={handleAnswerSubmit} isDisabled={answer === null}>
        Submit answer
      </Button>
    </>
  )
}

export default Play
