import { Container} from '@mui/material';
import { useEffect, useContext } from 'react';
import { Preloader } from '../components/Preloader';
import { FilmsContext } from '../context';
import Slider from '../components/Slider';

function Main() {
  const { setFilms, loading} = useContext(FilmsContext)

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/person/550843/combined_credits?api_key=ea6083c2a1a1b17623ad07f36d44c827&language=en-US`)
    .then(response => response.json())
    .then(response => setFilms(response.cast))
    .catch(err => console.log(err));
  }, [])

  return (
      <Container className="App" sx={{minHeight: "calc(100vh - 70px - 64px)", padding: "1.5rem 0"}}>
        {/* {loading ? <Preloader /> : 
          <CardList/>
        } */}
        <Slider/>
      </Container>
  );
}

export default Main;
