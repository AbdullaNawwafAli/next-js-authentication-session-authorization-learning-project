import { Box, Button, Link, TextField, Typography } from "@mui/material";


export default function Home() {
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
        <TextField id="standard-basic" label="login" variant="standard" sx={{backgroundColor: 'white'}} />
      <TextField id="standard-basic" label="password" variant="standard" sx={{backgroundColor: 'white'}} />
       <Link href="/dashboard">
       <Button>
        Log in
      </Button>
       </Link> 
      
      </Box>
      
    </Box>
  );
}
