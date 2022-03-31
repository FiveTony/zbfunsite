import {useContext} from 'react'
import { FilmsContext } from '../context'
import CardItem from './CardItem'

const CardsList = () => {

  const { films = [] } = useContext(FilmsContext)
  if (!films.length) {
    return <h3>Nothing</h3>
 }

  return (
    <div className='films'>
      {films.map(
        item => {
          return (<CardItem key={item.id} {...item}/>)})}
    </div>
  
  )
}

export default CardsList