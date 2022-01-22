import Link from '../components/link/Link'
import Wrapper from '../components/layout/Wrapper'

function Home() {
  return (
    <Wrapper>
      <main>
        <h1 className="text-center">Welcome Home!</h1>

        <div className="text-center">
          <Link to="quiz">Go to the quiz</Link>
        </div>
      </main>
    </Wrapper>
  )
}

export default Home
