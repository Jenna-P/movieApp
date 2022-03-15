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
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPositon: 'center, center',
            width: '100%',
            positon: 'relative', }}>

            <div style={{height: '500px'}} > 
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
                <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', width:'100%', maxWidth: '600px', marginLeft: '4rem', position:'absolute', top:'200px'}}>
                    <div className='playBtn'>
                        <button onClick={showPlayer}><FaPlay style={{margin:'0px 5px'}} />    Play trailer</button>
                    </div>
                    <h1 style={{ color: 'white', margin:'5px 0px', fontSize:'40px'}}> {props.title} </h1> 
                    <p style={{ color: 'white', fontSize: '18px', marginBottom:'5px'}}> {props.text}</p>
                    <div style={{ display:'flex', color:'white', fontWeight:'bold', fontStyle:'italic', fontSize:'16px'}} >
                        <p style={{ marginRight:'155px'}}>{props.str_director}</p>
                        <p>{props.str_runtime}</p>
                    </div>
                    <div style={{ display:'flex', color:'white', position:'relative', bottom:'15px'}} >
                        <p style={{ position:'absolute'}}>{props.director}</p>
                        <p style={{ position:'absolute', left: '218px'}}>{props.runTimeInfo}</p>
                    </div>
                    
                </div> }
            </div>
           
        </div>
    )
}

export default MainImage




