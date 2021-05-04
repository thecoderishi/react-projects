<<<<<<< HEAD
import React from 'react'

const Menu = ({ items }) => {
  return (
    <section className='section-center'>
      {items.map((item) => {
        const { id, title, img, price, desc } = item
        return (
          <article className='menu-item' key={id}>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>₹{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Menu
=======
import React from 'react'

const Menu = ({ items }) => {
  return (
    <section className='section-center'>
      {items.map((item) => {
        const { id, title, img, price, desc } = item
        return (
          <article className='menu-item' key={id}>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>₹{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Menu
>>>>>>> a398506f298e5f402ec0d7fa03c5392284c484a3
