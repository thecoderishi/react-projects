import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState()
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let para = parseInt(count)
    if (count < 1) {
      para = 1
    }
    if (count > data.length + 1) {
      para = data.length + 1
    }
    setText(data.slice(0, para))
  }
  return (
    <section className='section-center'>
      <h2>useLess Lorem</h2>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraph : </label>
        <input
          type='number'
          name='amount'
          id='amount'
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph) => {
          return <p>{paragraph}</p>
        })}
      </article>
    </section>
  )
}

export default App
