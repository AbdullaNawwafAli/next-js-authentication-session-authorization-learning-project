"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({mode: 'all', resolver: zodResolver(LoginSchema) });

  return (
    
      <form className="form">
        <Stack spacing= {1}>
        <TextField
          id="email"
          label="login"
          variant="outlined"
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#ffffff",
              fontFamily: "Arial",
              input: { color: 'white' },
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff",
                borderWidth: "1px",
                
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#ffffff",
              input: { color: 'white' }
            },
            
          }}
          {...register("email")}
          error = {!!errors.email}
          helperText = {errors.email?.message || " "}
  />

        

        <TextField
          id="password"
          label="password"
          variant="outlined"
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#ffffff",
              fontFamily: "Arial",
              input: { color: 'white' },
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff",
                borderWidth: "1px",
                
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#ffffff",
              input: { color: 'white' }
            },
            
          }}
          {...register("password")}
          error = {!!errors.password}
          helperText = {errors.password?.message || " "}
        />

        <Button type="submit">Log in</Button>
        </Stack>
      </form>
  
  );
};
