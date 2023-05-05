import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeeddbackData from './Data/FeedbackData'

function App() {
  const [feedback, setfeedback] = useState(FeeddbackData)
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}
export default App
