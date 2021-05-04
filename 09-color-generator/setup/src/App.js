import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values('#f15025').all(10))
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(colorValue).all(10)
      setColorList(colors)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='color'
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            Generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {colorList.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
