import { Box, Button, Link, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        padding: "20px",
        borderBottom: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">you logged in</Typography>
      
      <Link href="/">
      <Button>Log Out</Button>
      </Link>
      
    </Box>
  );
}
