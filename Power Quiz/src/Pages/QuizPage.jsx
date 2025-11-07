import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import QUESTIONS from "../data/questions.js"

function QuizPage(){
    const { subject } = useParams()
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [selected, setSelected] = useState(null)

    const list = QUESTIONS[subject]

    if(!list){
        return (
        <div className="webpage">
            <h2>Unknown subject</h2>
            <p>The subject "{subject}" was not found. Return to the <Link to="/">Dashboard</Link>.</p>
        </div>
        )
    }

    const questions = list

    function choose(i){
        if(showAnswer) return
        setSelected(i)
        setShowAnswer(true)
        if(i === questions[index].answer){
        setScore(s => s + 1)
        }
    }

    function next(){
        setShowAnswer(false)
        setSelected(null)
        if(index + 1 < questions.length){
        setIndex(index + 1)
        } else {
        // finished
        setIndex(index + 1)
        }
    }

    function restart(){
        setIndex(0)
        setScore(0)
        setShowAnswer(false)
        setSelected(null)
    }

    // finished view
    if(index >= questions.length){
        return (
        <div className="webpage quiz-page">
            <h2>Quiz complete: {subject}</h2>
            <p>You scored {score} out of {questions.length}.</p>
            <div className="quiz-actions">
            <button onClick={restart} className="btn">Retake Quiz</button>
            <button onClick={() => navigate('/')} className="btn outline">Back to Dashboard</button>
            </div>
        </div>
        )
    }

    const q = questions[index]

    return (
        <div className="webpage quiz-page">
        <div className="quiz-header">
            <h2>{subject.charAt(0).toUpperCase() + subject.slice(1)} Quiz</h2>
            <p>Question {index + 1} of {questions.length}</p>
        </div>

        <div className="question-card">
            <h3>{q.question}</h3>
            <div className="options">
            {q.options.map((opt, i) => {
                const isCorrect = i === q.answer
                const isSelected = i === selected
                const className = showAnswer
                ? (isCorrect ? 'option correct' : (isSelected ? 'option wrong' : 'option'))
                : (isSelected ? 'option selected' : 'option')

                return (
                <button key={i} onClick={() => choose(i)} className={className}>
                    {opt}
                </button>
                )
            })}
            </div>

            <div className="quiz-footer">
            {showAnswer ? (
                <button onClick={next} className="btn">{index + 1 < questions.length ? 'Next' : 'Finish'}</button>
            ) : (
                <button onClick={() => { setSelected(0); }} className="btn outline" disabled>Pick an answer</button>
            )}
            <div className="score">Score: {score}</div>
            </div>
        </div>

        </div>
    )
}

export default QuizPage
