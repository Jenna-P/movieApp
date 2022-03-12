import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {API_KEY} from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';




function MovieDetail(props) {

    const [Movie, setMovie] = useState([]);
     const [Crews, setCrews] = useState([]);
    // const [Casts, setCasts] = useState(0);


    const fetchMovies = async () => {
        
        const info = await axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.movieID}?api_key=${API_KEY}
        `)

        const credits = await axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.movieID}/credits?api_key=${API_KEY}
        `)   

        
    
       
        console.log(credits.data);
        setMovie(info.data);
        setCrews(credits.data.crew);
        

    }

    useEffect( () => {
        fetchMovies();
      }, [])

  return (
    <div style={{ width: '100%', margin: '0'}}>
      {/*Header */}
      
      
      {Movie && Crews && Crews.filter(person => person.job === "Director").map(filteredPerson => (
       <MainImage 
       image={`https://image.tmdb.org/t/p/w1280${Movie.backdrop_path}`} 
       title={Movie.original_title}
       text={Movie.overview}
       str_runtime='Runtime'
       runTimeInfo={Movie.runtime} 
       str_director='Director'
       director={filteredPerson.name}
       />
       ))}

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
