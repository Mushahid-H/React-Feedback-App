import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeeddbackData from './Data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
function App() {
  const [feedback, setfeedback] = useState(FeeddbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure to delete the feedback?')) {
      setfeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setfeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}
export default App
