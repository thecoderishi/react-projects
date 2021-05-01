import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>QNA's</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.is} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
