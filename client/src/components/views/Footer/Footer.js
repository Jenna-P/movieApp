import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor:'#181818'
        }}>
           <p style={{ color:'white', position:'relative', top:'10px'}}> Code My Dream  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
