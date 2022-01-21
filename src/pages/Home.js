import Link from '../components/link/Link'
import Wrapper from '../components/layout/Wrapper'

function Home() {
  return (
    <Wrapper>
      <main>
        <h1>Welcome Home!</h1>

        <Link to="quiz">Go to the quiz</Link>
      </main>
    </Wrapper>
  )
}

export default Home
