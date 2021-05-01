import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
function App() {
  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(items)

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItem = items.filter((item) => item.category === category)
    setMenuItems(newItem)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
        </div>
        <div className='underline'></div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
