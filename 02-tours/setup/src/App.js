import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }
  const fetctTours = async () => {
    setIsLoading(true)
    try {
      const respons = await fetch(url)
      const tours = await respons.json()
      setIsLoading(false)
      setTours(tours)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetctTours()
  }, [])
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <div className='title'>
        <h2>No Your Left</h2>
        <div className='underline'></div>
        <button className='btn' onClick={fetctTours}>
          Refresh
        </button>
      </div>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
