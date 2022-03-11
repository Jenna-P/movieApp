import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {API_KEY} from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';

function MovieDetail(props) {

    const [Movie, setMovie] = useState([]);

    const fetchMovies = async () => {
        
        const info = await axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.movieID}?api_key=${API_KEY}
        `)
      
        console.log(info.data);
        setMovie(info.data);
    }

    useEffect( () => {
        fetchMovies();
      }, [])
    

  return (
    <div>
      {/*Header */}

      {Movie &&
       <MainImage 
       image={`https://image.tmdb.org/t/p/w1280/${Movie.backdrop_path}`} 
       title={Movie.original_title}
       text={Movie.overview}
       />
        }

      {/* body */}
      <div style={{ width: '85%', margin: '1rem auto'}}>
        {/* Movie info */}

        <br />
        {/* cast grid */}
        <div style={{ display:'flex', justifyContent: 'flex-start'}}>
                <p style={{ color:'white', fontSize:'24px'}}>Top Billed Cast</p>
        </div>
        <div style={{ display:'flex', justifyContent: 'flex-start'}}>
                <button style={{ fontSize:'20px'}}>Full casts & Crew</button>
        </div>

      </div>

    </div>
  )
}

export default MovieDetail
