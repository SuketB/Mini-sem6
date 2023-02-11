import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import HomeB from "../components/HomeB"
import { Grid } from '@mui/material'




const index = () => {
 


return (
   
    
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
      <h2>UART Features</h2>
      <HomeB
        nam="Voltage Glitcher"
        dis="jdcojkanjkbhbcdhbdjncd"
        distit="dcdckdcndcdc"
        lin="/uart"
      />
      <HomeB
        nam="Detect Baudrate"
        dis="jdcojkanjkbdihbcdhbdjncd"
        distit="djsnjkdnaks"
        lin="/uart"

      />
      <HomeB
        nam="Check for UART Console"
        dis="jdcojkanjkbdihbcdhbdjncd"
        distit="djsnjkdnaks"
        lin="/uart"

      />
      <HomeB
        nam="Capture Boot Logs"
        dis="jdcojkanjkbdihbcdhbdjncd"
        distit="djsnjkdnaks"
        lin="/uart"

      />
      <HomeB
        nam="Analyze Boot Logs"
        dis="jdcojkanjkbdihbcdhbdjncd"
        distit="djsnjkdnaks"
        lin="/uart"

      />
      <h2>SPI</h2>
      <HomeB
        nam="About SPI"
        dis="jdcojkanjkbdihbcdhbdjncd"
        distit="djsnjkdnaks"
        lin="/spi"

      />
      
      </div>
      

  
  )
}

export default index
