import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './LandingPage.css';


function MainImage(props) {
    return (
        <div style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0)39%,rgba(0,0,0,0)41%,rgba(0,0,0,0.65)100%), url(${props.image}), #1c1c1c`,
                     height: '500px',
                     backgroundSize: '100%, cover',
                     backgroundPositon: 'center, center',
                     width: '100%',
                     positon: 'relative',
                     
        }}>
            <div style={{height: '500px'}} > 
                <div style={{ position: 'absolute', top:'30%', width:'100%', maxWidth: '500px', marginLeft: '3rem'}}>
                    <div className='playBtn'>
                        <a href='#'><FaPlay style={{position:'relative', top:'2px', margin:'0 5px'}} />    Play trailer</a>
                    </div>
                    <h1 style={{ color: 'white', marginTop:'10px'}}> {props.title} </h1> 
                    <p style={{ color: 'white', fontSize: '1rem'}}> {props.text}</p>
                    <div style={{ display:'flex', color:'white', fontWeight:'bold', fontStyle:'italic'}} >
                        <p style={{ marginRight:'155px'}}>{props.str_director}</p>
                        <p>{props.str_runtime}</p>
                    </div>
                    <div style={{ display:'flex', color:'white', position:'relative', bottom:'15px'}} >
                        <p style={{ position:'absolute'}}>{props.director}</p>
                        <p style={{ position:'relative', left: '42%'}}>{props.runTimeInfo}</p>
                    </div>
                    
                </div>
            </div>
           
        </div>
    )

}



export default MainImage




