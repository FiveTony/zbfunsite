import StarIcon from '@mui/icons-material/Star';

const CardItem = (props) => {
    const {title, name, original_title, poster_path, release_date, overview, vote_average} = props
  return (
  

    <div className="card" >
        <div className="card-image">
            <img src='http://img2.joyreactor.cc/pics/post/%D0%AD%D0%BB%D0%B8%D0%B7%D0%B0%D0%B1%D0%B5%D1%82-%D0%9E%D0%BB%D1%81%D0%B5%D0%BD-Elizabeth-Olsen-%D0%90%D0%BA%D1%82%D0%B5%D1%80%D1%8B-%D0%B8-%D0%90%D0%BA%D1%82%D1%80%D0%B8%D1%81%D1%8B-%D0%97%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D0%BE%D1%81%D1%82%D0%B8-6569611.jpeg' alt="zb" />
        </div>
        <div className="card-content">
            <div className="card-title">
                <span>{ name || title || original_title}</span>
            </div>
            <div className='card-info'>
                <div className="card-vote">
                    <span>{ vote_average || null}</span>
                    <StarIcon/>
                </div>
                <span className="card-date">{ release_date || null}</span>
            </div>
            <div className='card-overview'>
                 <p>{overview}</p>
            </div>
        </div>
    </div>
  
  )
}

export default CardItem