import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text.length === '') {
      setDisabled(true)
      setMessage(null)
    } else if (text.length <= 10) {
      setDisabled(true)
      setMessage('Please enter at least 10 characters')
    } else {
      setDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you like to rate us?</h2>
        {/* todo rating select component */}
        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
