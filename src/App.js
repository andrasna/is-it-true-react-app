import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Quiz from './pages/quiz/Quiz'
import Intro from './components/quiz/intro/Intro'
import Play from './components/quiz/play/Play'
import Result from './components/quiz/result/Result'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />}>
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
