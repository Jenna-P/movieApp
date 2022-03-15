import React from 'react'
//import { FaCode } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../Config';
import MainImage from '../MainImage';
import GridCards from '../GridCards';
import {Row} from 'antd';
import '../main_style.css';
import { FaSearch } from 'react-icons/fa';


function LandingPage() {

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);
  const [searchKey, setSearchKey] = useState("");
  const [VideoData, setVideoData] = useState(null);
  
    const fetchMovies =  async (searchKey) => {
      const SEARCH_API = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchKey}`
      const DISCOVER_API = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage+1}`

      const type = searchKey ? SEARCH_API : DISCOVER_API ;  
      const {data: {results, page}} = await axios.get(`${type}`);

      const videoData = await axios.get( `${API_URL}/movie/${results[0].id}/videos?api_key=${API_KEY}
      `)
      if (videoData && videoData.data.results) {
        const trailer = videoData.data.results.find(vid => vid.name === "Official Trailer" || vid.name === "Main Trailer")
        setVideoData(trailer ? trailer : videoData.data.results[0])
    }
 
    if(searchKey){
      setMovies(results);
    } else {
      setMovies([...Movies, ...results]);}
    setMainMovieImage(results[0]);
    setCurrentPage(page);
  }

  useEffect(() => {
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
       main_key={VideoData.key}
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
                  <GridCards 
                            landingPage
                            image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null} 
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
