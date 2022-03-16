import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import './main_style.css';
import Youtube from 'react-youtube'


// background: `linear-gradient(to bottom, rgba(0, 0, 0, 0)39%,rgba(0,0,0,0)41%,rgba(0,0,0,0.65)100%), url(${props.image}), #1c1c1c
function MainImage(props) {

 const [playing, setPlaying] = useState(false);
 
  function showPlayer()  {
      setPlaying(true);
  }

    return (
        <div style={{background:
            `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${props.image}'), #1c1c1c`,
            backgroundSize: '100%, cover',
            backgroundPositon: 'center, center',
            width: '100%',
            positon: 'relative', }}>

            <div className="mainImage-container"> 
                {playing ?  
                <div>
                    <Youtube 
                        videoId={props.video_key ? props.video_key : props.main_key}
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
                <button onClick={() => setPlaying(false)} className={"button close-video"}>X
                </button>
                    
                </div> 
                : 
                <div className='text-content' style={{ display: 'flex', flexDirection:'column', justifyContent:'center',  position:'absolute', top:'200px'}}>
                    <div className='playBtn'>
                        <button onClick={showPlayer}><FaPlay style={{margin:'0px 5px'}} />    Play trailer</button>
                    </div>
                    <h1 className='title' style={{ color: 'white', margin:'5px 0px'}}> {props.title} </h1> 
                    <p style={{ color: 'white', marginBottom:'5px'}}> {props.text}</p>
                    <div className='movie-detail-title' style={{ color:'white', fontWeight:'bold', fontStyle:'italic', fontSize:'16px'}} >
                        <p style={{ marginRight:'155px'}}>{props.str_director}</p>
                        <p>{props.str_runtime}</p>
                    </div>
                    <div className='movie-details'>
                        <p>{props.director}</p>
                        <p>{props.runTimeInfo}</p>
                    </div>
                    
                </div> }
            </div>
           
        </div>
    )
}

export default MainImage




