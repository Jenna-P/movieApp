import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import axios from 'axios';
import {API_KEY} from '../../../Config';
import './LandingPage.css';
import Youtube from 'react-youtube'


// background: `linear-gradient(to bottom, rgba(0, 0, 0, 0)39%,rgba(0,0,0,0)41%,rgba(0,0,0,0.65)100%), url(${props.image}), #1c1c1c
function MainImage(props) {

 const [playing, setPlaying] = useState(false);
 
  function showPlayer()  {
      setPlaying(true);
  }

    return (
        <div style={{backgroundImage: `url(${props.image})` ,
                     height: '500px',
                     backgroundSize: '100%, cover',
                     backgroundPositon: 'center, center',
                     width: '100%',
                     positon: 'relative',
                     
        }}>
            <div style={{height: '500px'}} > 
            {playing ?  
                <div>
                    <Youtube 
                        videoId={props.video_key}
                        className={"youtube amru"}
                        containerClassName={"youtube-container amru"}
                        opts={
                            {
                                width: '100%',
                                height: '500px',
                                playerVars: {
                                autoplay: 1,
                                controls: 1,
                                cc_load_policy: 0,
                                fs: 0,
                                iv_load_policy: 0,
                                modestbranding: 0,
                                rel: 0,
                                showinfo: 0,
                                
                                },
                            }
                        }
                    />
               
                    
                </div> 
                : 
                <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', width:'100%', maxWidth: '500px', marginLeft: '4rem', position:'absolute', top:'250px'}}>
                    <div className='playBtn'>
                        <button onClick={showPlayer}><FaPlay style={{margin:'0 5px'}} />    Play trailer</button>
                    </div>
                    <h1 style={{ color: 'white', marginTop:'0px'}}> {props.title} </h1> 
                    <p style={{ color: 'white', fontSize: '1rem'}}> {props.text}</p>
                    <div style={{ display:'flex', color:'white', fontWeight:'bold', fontStyle:'italic'}} >
                        <p style={{ marginRight:'155px'}}>{props.str_director}</p>
                        <p>{props.str_runtime}</p>
                    </div>
                    <div style={{ display:'flex', color:'white', position:'relative', bottom:'15px'}} >
                        <p style={{ position:'absolute'}}>{props.director}</p>
                        <p style={{ position:'relative', left: '42%'}}>{props.runTimeInfo}</p>
                    </div>
                    
                </div> }
            </div>
           
        </div>
    )

}



export default MainImage




