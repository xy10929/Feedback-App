import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({ handleAdd }) {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [massage, setMassage] = useState('')
  const [rating, setRating] = useState(10)

  const handleTextChange = (e) => {
    if (text === null) {
      setBtnDisabled(true)
      setMassage(null)
    } else if (text.trim().length < 10) {
      setBtnDisabled(true)
      setMassage('Text must be at least 10 charecters')
    } else {
      setBtnDisabled(false)
      setMassage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating
      }

      handleAdd(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input type="text" placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {massage && <div className="message">{massage}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm