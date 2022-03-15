import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {API_KEY} from '../Config';
import MainImage from '../MainImage';
import GridCards from '../GridCards';
import {Row} from 'antd';
import './MovieDetail.css'
import { FaChevronDown } from 'react-icons/fa';


function MovieDetail(props) {

    const [Movie, setMovie] = useState([]);
    const [Crews, setCrews] = useState([]);
    const [Casts, setCasts] = useState([]);
    const [ShowMoreCasts, setShowMoreCasts] = useState([]); 
    const [Videos, setVideos] = useState(null);
    //const [ValidId, setValidId] = useState("");
    
     
    const fetchMovies = async () => {
        
      let movieId = props.match.params.movieID;

        const info = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}
        `)
        const credits = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}
        `)
        
        const videoData = await axios.get( `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}
        `)
  
        if (videoData && videoData.data.results) {
          const trailer = videoData.data.results.find(vid => vid.name === "Official Trailer" || vid.name === "Main Trailer")
          setVideos(trailer ? trailer : videoData.data.results[0])
      }

       
        let slice = credits.data.cast.slice(0, 6);
        let showMore = credits.data.cast.slice(7, credits.data.cast.length);
        //console.log('ccc', info.data);
        setMovie(info.data);
        setCrews(credits.data.crew);
        setCasts(slice);
        setShowMoreCasts(showMore);
       
    }

    useEffect(() => {
      fetchMovies();
        // eslint-disable-line react-hooks/exhaustive-deps
    }, [props.match.params.movieID])

    const showmore = () => {
     
      setCasts([...Casts, ...ShowMoreCasts]);
  }

  return (
    <div style={{ width: '100%', margin: '0'}}>
      {/*Header */}
      {Movie && Videos && Crews && Crews.filter(person => person.job === "Director").map(filteredPerson => (
       <MainImage 
       key={Movie.id}
       image={`https://image.tmdb.org/t/p/w1280${Movie.backdrop_path}`} 
       title={Movie.original_title}
       text={Movie.overview}
       str_runtime='Runtime'
       runTimeInfo={Movie.runtime} 
       str_director='Director'
       director={filteredPerson.name}
       video_key={Videos.key} 
       />
       ))}

      {/* body */}
      <div style={{ width: '85%', margin: '1rem auto'}}>
       
        <br />
        {/* cast grid */}
        <div style={{ display:'flex', justifyContent: 'flex-start'}}>
                <p style={{ color:'white', fontSize:'24px'}}>Top Billed Cast</p>
        </div>
        <div>
        <Row gutter={[16, 16]}>
              {Casts && Casts.map((cast) =>  (
                <React.Fragment key={cast.id}>
                  <GridCards image={cast.profile_path ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : `https://www.finsoe.dk/wp-content/uploads/2020/02/blank-profile-picture-973460_640.png`} 
                            name={cast.original_name}
                            character={cast.character}
                  />
                </React.Fragment>
          )) }
          </Row>
          
        </div>
        
        <div className="button-wrapper">
       
                <button className="viewMoreBtn" onClick={showmore}>View More</button>
             
                <FaChevronDown className="viewMoreBtn" />
        </div>

      </div>

    </div>
  )
}

export default MovieDetail
