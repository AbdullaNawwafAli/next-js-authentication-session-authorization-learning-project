import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'

const login = () => {
  return (
    <Box>
      <Box sx = {{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
        padding: '20px',
        borderBottom: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }}>
        <Typography variant="h1">
          LOG IN
        </Typography>
        <form className='flex flex-col gap-5'>
        <TextField id="login" label="login" variant="standard" sx={{backgroundColor: 'white'}} />
      <TextField id="password" label="password" variant="standard" sx={{backgroundColor: 'white'}} />
       <Link href="/dashboard">
       <Button>
        Log in
      </Button>
       </Link> 
        </form>
       
      
      </Box>
      
    </Box>
  )
}

export default login