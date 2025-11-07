import { Link } from "react-router-dom"

const subjects = [
    { key: "maths", label: "Mathematics" },
    { key: "chemistry", label: "Chemistry" },
    { key: "physics", label: "Physics" },
    { key: "biology", label: "Biology" },
    { key: "geography", label: "Geography" },
    { key: "english", label: "English" },
    { key: "literature", label: "Literature" },
    { key: "agriculture", label: "Agricultural Science" },
]

function Dashboard(){
        return(
            <div className="webpage dashboard">
                <h1>Hello 👋, welcome to the <span>S.T.E.P</span> Education Power Quiz 🎓</h1>
                <p>Choose a subject below to start a short quiz and test your knowledge.</p>

                <h2 id="h1">Subjects</h2>

                <div className="subjects-grid">
                    {subjects.map(s => (
                        <Link key={s.key} to={`/quiz/${s.key}`} className="subject-card">
                        <div className="card-content">
                            <h3>{s.label}</h3>
                            <p>Take a quick quiz on {s.label}.</p>
                        </div>
                        </Link>
                    ))}
                </div>

            </div>
        )
}

export default Dashboard