import React from 'react'
import { FaCode } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY} from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../../commons/GridCards';
import {Row} from 'antd';

function LandingPage() {

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

    const fetchMovies = async () => {
      const {data: {results, page}} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage+1}
      `)
    

   // console.log('data', results);
    setMovies([...Movies, ...results]);
    setMainMovieImage(results[0]);
    setCurrentPage(page);
  }

  useEffect( () => {
    fetchMovies();
  }, [])

  const loadMoreItems = () => {
    fetchMovies();
  }
  
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

            <h2 style={{ color: 'white'}}>Movies by latest</h2>
            <hr />

            {/*Movie Grid Card */}
           <Row gutter={[16, 16]}>
            {Movies && Movies.map((movie, index) =>  (
              <React.Fragment key={index}>
                <GridCards image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null} 
                           movieId={movie.id}
                           movieName={movie.original_title}
                />
              </React.Fragment>
          
          ))}
          
          </Row>

        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0 40px 0'}}>
            <button style={{ backgroundColor: 'rgb(223, 199, 22)', border:'none', borderRadius: '5px', height:'30px', cursor:'pointer'}} onClick={loadMoreItems}>Load More</button>
        </div>
    </div>
    )
}

export default LandingPage
