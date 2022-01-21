import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Intro from './components/quiz/Intro'
import Play from './components/quiz/play/Play'
import Result from './components/quiz/Result'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quiz" element={<Quiz />}>
            <Route path="" element={<Intro />} />
            <Route path="play" element={<Play />} />
            <Route path="result" element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
