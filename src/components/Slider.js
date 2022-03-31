import {useContext, useState} from 'react'
import { FilmsContext } from '../context'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Slider = () => {
  const { films = [] } = useContext(FilmsContext)

  const [current, setCurrent] = useState(0)
  const length = films.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!films.length) {
    return <h3>Nothing</h3>
 }
  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {films.map(
        (item, index) => {
            if (item.poster_path != null)
            {
              let path = 'https://image.tmdb.org/t/p/original/'+item.poster_path
              console.log(path)
              return (
              <div className={index=== current ? 'slide-active' : 'slide'} key={index}>
                {index===current && (<img src={path} key={item.poster_path} alt='' className='slider-image'/>)}
              </div>
            ) 
            } 
            
           })}
    </section>
  )
}

export default Slider