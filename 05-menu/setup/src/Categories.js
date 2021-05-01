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
