import React, { useEffect, useState } from 'react'
import { FaHeart, FaCheckCircle } from 'react-icons/fa';
import './favorite.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Favorite(props) {
    const user = useSelector(state => state.user)

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [Favorited, setFavorited] = useState(false);
    const variables = {
        movieId: movieId,
        userFrom: userFrom,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime
    }

    useEffect(() => {

        // axios.post('/api/favorite/favoriteNumber', variables)
        //     .then(response => {
        //         if (response.data.success) {
        //             setFavoriteNumber(response.data.subscribeNumber)
        //         } else {
        //             alert('Failed to get Favorite Number')
        //         }
        //     })

        axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.subcribed)
                } else {
                    alert('Failed to get Favorite Information')
                }
            })

    }, [])

    function onClickFavorite() {
        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        axios.post('/api/favorite/addToFavorite', variables)
        .then(response => {
            if (response.data.success) {
                setFavorited(!Favorited)
            } else {
                alert('Failed to Add To Favorite')
            }
        })
    }
    function removeFavorite() {
            //when we are already subscribed 
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavorited(Favorited)
                    } else {
                        alert('Failed to Remove From Favorite')
                    }
                })
    }

  return (
    <div>
      {Favorited ? 
      <button onClick={removeFavorite} className='favBtn'><FaCheckCircle style={{position:'relative', top:'2px'}} /><span>   Added!</span></button> 
      : 
      <button onClick={onClickFavorite} className='favBtn'><FaHeart style={{position:'relative', top:'2px'}} /><span>   Favorite</span></button>
    }
    </div>
  )
}

export default Favorite

