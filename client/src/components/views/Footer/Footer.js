import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p style={{ color:'rgb(223, 199, 22)'}}> Code My Dream  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
