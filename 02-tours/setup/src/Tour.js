<<<<<<< HEAD
import React, { useState } from 'react'

const Tour = ({ id, image, price, info, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='your-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>₹{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Read less' : 'show more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not intrested
        </button>
      </footer>
    </article>
  )
}

export default Tour
=======
import React, { useState } from 'react'

const Tour = ({ id, image, price, info, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='your-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>₹{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Read less' : 'show more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not intrested
        </button>
      </footer>
    </article>
  )
}

export default Tour
>>>>>>> a398506f298e5f402ec0d7fa03c5392284c484a3
