import React from 'react'
//import { FaCode } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY} from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../../commons/GridCards';
import {Row} from 'antd';
import './Sections/LandingPage.css';
import { FaSearch } from 'react-icons/fa';


function LandingPage() {

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);
  const [searchKey, setSearchKey] = useState("");

    const fetchMovies = async (searchKey) => {
         const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchKey}&page=1`
         const DISCOVER_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage+1}`

      const type = searchKey ? SEARCH_API : DISCOVER_API ;  
      const {data: {results, page}} = await axios.get(`${type}`);
    

    console.log('data', results);
    setMovies(results, [...Movies, ...results]);
    setMainMovieImage(results[0]);
    setCurrentPage(page);
  }

  useEffect( () => {
    fetchMovies();
  }, [])

  const loadMoreItems = () => {
    fetchMovies();
  }

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
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
            <div className='upperLine-wrapper'>
              <h2 style={{ color: 'white'}}>Popular Movies</h2>
              <div className='search-wrapper'>
                <form onSubmit={searchMovies}>
                  <input type='text' placeholder='  Search movie' id="search"
                           onChange={(e) => setSearchKey(e.target.value)}></input>
                  <button className='submit-search' type={"submit"}><FaSearch /></button>
                </form>
              </div>
            </div>
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
          )) }
          </Row>
            
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0 40px 0'}}>
            <button className='loadBtn' onClick={loadMoreItems}>Load More</button>
        </div>
    </div>
    )
}

export default LandingPage
