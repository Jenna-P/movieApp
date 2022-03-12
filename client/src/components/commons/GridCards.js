import React from 'react'
import { Col } from 'antd'


function GridCards(props) {
  return (
    <Col lg={4} md={8} xs={24}>
        <div style={{ position: 'relative'}}>
            <a href={`/movie/${props.movieId}`}>
                <img style={{ width: '100%', height: '220px'}} src={props.image} alt={props.movieName}/>
            </a>
            <p style={{ color: 'white', fontSize:'17px', fontWeight:'bold', textAlign:'center'}}>{props.name}</p>
            <p style={{ color: 'white', fontSize:'15px', fontStyle:'italic', textAlign:'center', position:'relative', bottom:'15px'}}>{props.character}</p>

        </div>
    </Col>
    
  )
}

export default GridCards
