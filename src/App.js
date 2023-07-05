import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStates from "./components/FeedbackStates"
import FeedbackForm from "./components/FeedbackForm"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure to delete?')){
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm/>
        <FeedbackStates feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>

      </div>
    </>
  )
}

export default App