import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider =({children}) => {

  const[feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item2',
      rating: 7
    },
    {
      id: 3,
      text: 'This is feedback item3',
      rating: 6
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const undateFeedback = (id, updItem) =>{
    setFeedback(feedback.map((item)=>
      item.id === id ? {...item, ...updItem} : item
    ))
  }

  return <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            undateFeedback,
          }}>
            {children}
          </FeedbackContext.Provider>
}

export default FeedbackContext