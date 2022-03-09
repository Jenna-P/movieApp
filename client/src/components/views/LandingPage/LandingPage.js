import React from 'react'
import { FaCode } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';

function LandingPage() {

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);

  const fetchMovies = async () => {
    const {data: {results}} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc
    `)

    console.log('data', results);
    setMovies(results);
    setMainMovieImage(results[0]);
  }

  useEffect( () => {
    fetchMovies();
  }, [])
  
    return (
        <div style={{ width: '100%', margin: '0'}}>

        {/* Main Image */}
       {MainMovieImage &&
       <MainImage 
       image={`https://image.tmdb.org/t/p/w1280/${MainMovieImage.backdrop_path}`} 
       title={MainMovieImage.original_title}
       text={MainMovieImage.overview}
       />
        }
        
        
        <div style={{ width: '85%', margin: '1rem auto'}}>

            <h2>Movies by latest</h2>
            <hr />

            {/*Movie Grid Card */}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <button>Load More</button>
        </div>
    </div>
    )
}

export default LandingPage
