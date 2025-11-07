import Dashboard from "./Pages/Dashboard.jsx"
import QuizPage from "./Pages/QuizPage.jsx"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/quiz/:subject" element={<QuizPage />} />
            </Routes>
        </>
    )
}

export default App
