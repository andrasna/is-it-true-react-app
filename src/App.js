import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/quiz/Quiz'
import Play from './pages/quiz/Play'
import Result from './pages/quiz/Result'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/play" element={<Play />} />
          <Route path="/quiz/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
