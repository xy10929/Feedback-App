import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FeedbackList from "./components/FeedbackList"
import FeedbackStates from "./components/FeedbackStates"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element ={
              <>
              <FeedbackForm />
              <FeedbackStates />
              <FeedbackList />
              </>
            }></Route>

            <Route path="/about" element={<AboutPage/>}/>
        
          </Routes>
          <AboutIconLink/>
        </div>      
      </Router>
    </FeedbackProvider>
  )
}

export default App