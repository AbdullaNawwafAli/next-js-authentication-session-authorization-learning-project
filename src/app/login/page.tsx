import { LoginForm } from "@/components/LoginForm";
import { Box, Typography } from "@mui/material";
import React from "react";


const login = () => {
  
  return (
    <Box>
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
          gap: "5px",
        }}
      >
        <Typography variant="h1">LOG IN</Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default login;
