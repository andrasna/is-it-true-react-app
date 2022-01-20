import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <h1>Welcome to the Trivia Challenge!</h1>

      <p>You will be presented with 4 true of false questions.</p>
      <p>Can you score 100%?</p>

      <Link to="/quiz">Begin</Link>
    </main>
  )
}

export default Home
