import LogoutButton from "@/components/LogOutButton";
import WebsiteHeader from "@/components/WebsiteHeader";

import { Box, Link, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        borderBottom: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WebsiteHeader />
      <Typography variant="h1">you logged in</Typography>
      
      <Link href="/">
      <LogoutButton />
      </Link>
      
    </Box>
  );
}
