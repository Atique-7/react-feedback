import { v4 as uuidv4 } from "uuid"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Header from "./component/Header"
import FeedbackList from "./component/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./component/FeedbackStats"
import FeedbackForm from "./component/FeedbackForm"
import AboutPage from "./pages/AboutPage"
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedbackItem = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  const addFeedbackItem = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path=""
            element={
              <>
                <FeedbackForm handleAdd={addFeedbackItem} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedbackItem}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
