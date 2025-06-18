import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const WebsiteHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) =>{
  return (
    <Box>
<Box sx={{
        component: 'header',
        backgroundColor: 'black',
        padding: '20px',
        borderBottom: '100%',
        display: 'flex',
      }}>
          <Typography variant="h4"
          sx={{
            backgroundColor: '#0A0A0A',
            padding: '10px',
            borderRadius: '10px', 
            color: '#1e842c'
          }}
          >
            Trial Website
          </Typography>
          <Button>
            Dashboard
          </Button>

        </Box>
        {children}
    </Box>
    
  )
}

export default WebsiteHeader