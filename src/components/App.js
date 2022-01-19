import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    ;(async () => {
      const url =
        'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
      const response = await fetch(url)
      const { results } = await response.json()
      console.log(results)
    })()
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  )
}

export default App
