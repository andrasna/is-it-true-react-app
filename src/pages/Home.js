import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <h1>Welcome Home!</h1>

      <Link to="quiz">Go to the quiz</Link>
    </main>
  )
}

export default Home
