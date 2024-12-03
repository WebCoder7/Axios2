import { Button, Dialog, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    request
      .post("/register", data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        setError("email", { message: err.response.data });
      });
  };
  return (
    <div>
      <Dialog open={true}>
        <Stack width={"400px"} p={"20px"} bgcolor={"#fff"}>
          <form onSubmit={handleSubmit(submit)}>
            <Stack gap={"20px"}>
              <TextField
                error={errors?.username ? true : false}
                helperText={
                  errors?.username?.message ? errors?.username?.message : ""
                }
                {...register("username", { required: true })}
                type="text"
                placeholder="Username"
              />
              <TextField
                error={errors?.email ? true : false}
                helperText={
                  errors?.email?.message ? errors?.email?.message : ""
                }
                {...register("email", { required: true })}
                placeholder="Email"
              />
              <TextField
                error={errors?.password ? true : false}
                helperText={
                  errors?.password?.message ? errors?.password?.message : ""
                }
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
              />
              <Button type="submit" variant="contained">
                send
              </Button>
            </Stack>
          </form>
        </Stack>
      </Dialog>
    </div>
  );
};
