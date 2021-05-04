<<<<<<< HEAD
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => {
            setShowInfo(!showInfo)
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && info}
    </article>
  )
}

export default Question
=======
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => {
            setShowInfo(!showInfo)
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && info}
    </article>
  )
}

export default Question
>>>>>>> a398506f298e5f402ec0d7fa03c5392284c484a3
