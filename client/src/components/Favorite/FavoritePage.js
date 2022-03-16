import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config'
import { Popover } from 'antd';
import './favorite.css';

function FavoritePage() {
    const [Favorites, setFavorites] = useState([])
    let variable = { userFrom: localStorage.getItem('userId') }

    const fetchFavoredMovie = () => {
        axios.post('/api/favorite/getFavoredMovie', variable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.favorites)
                    setFavorites(response.data.favorites)
                } else {
                    alert('Failed to get subscription videos')
                }
            })
    }

    useEffect(() => {
        fetchFavoredMovie()
    }, [])

    const onClickDelete = (movieId, userFrom) => {

        const variables = {
            movieId: movieId,
            userFrom: userFrom,
        }

        axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                if (response.data.success) {
                    fetchFavoredMovie()
                } else {
                    alert('Failed to Remove From Favorite')
                }
            })
    }

    const renderCards = Favorites.map((favorite, index) => {
        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${favorite.moviePost}`} alt={'movie poster'} />
                    : "no image"}
            </div>
        );

        return <tr key={index}>

            <Popover content={content} title={`${favorite.movieTitle}`}>
                <td>
                    
                    <a href={`/movie/${favorite.movieId}`}>
                        {favorite.movieTitle} </a>
                </td>
            </Popover>

            <td>
                <div className="table-wrapper">
                {favorite.movieRunTime} mins
                <button className="removeBtn" onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}> Remove </button>
                </div>
            </td>
        </tr>
    })


  return (
    <div>
      <div style={{ width: '80%', margin: '3rem auto'}}>
            <h1 style={{ color: 'white'}}> My Favorite Movies </h1>
                <table>
                    <thead>
                        <tr>
                            <th>Movie Title</th>
                            <th>RunTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCards}
                    </tbody>
                </table>              
        </div>
    </div>
  )
}

export default FavoritePage
