<<<<<<< HEAD
import React from 'react'

const Categories = ({ categories, filterItem }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          className='filter-btn'
          key={index}
          onClick={() => {
            filterItem(category)
          }}
          active
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories
=======
import React from 'react'

const Categories = ({ categories, filterItem }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          className='filter-btn'
          key={index}
          onClick={() => {
            filterItem(category)
          }}
          active
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories
>>>>>>> a398506f298e5f402ec0d7fa03c5392284c484a3
