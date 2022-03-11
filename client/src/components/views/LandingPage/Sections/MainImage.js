import React from 'react';

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
                <div style={{ position: 'absolute', bottom: '9rem', width:'100%', maxWidth: '500px', marginLeft: '3rem'}}>
                    <h1 style={{ color: 'white'}}> {props.title}</h1>
                    <p style={{ color: 'white', fontSize: '1rem'}}> {props.text}</p>
                </div>
            </div>
        </div>
    )

}



export default MainImage




