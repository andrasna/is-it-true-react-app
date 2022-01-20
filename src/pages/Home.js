import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to the Trivia Challenge!</h1>

      <p>You will be presented with 10 true of false questions.</p>
      <p>Can you score 100%?</p>

      <Link to="/quiz">Begin</Link>
    </div>
  )
}

export default Home
