<<<<<<< HEAD
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
=======
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
>>>>>>> a398506f298e5f402ec0d7fa03c5392284c484a3
