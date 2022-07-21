import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import "../../stylesheets/Signin.css";
import axios from "axios";

function Signin() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  console.log("watch: ", watch());
  const onSubmit = (userdata) => {
    //axios
    axios({
      method: `POST`,
      url: `https://clonetodo.herokuapp.com/login`,
      data: userdata,
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("response", res);
        if (res.status != 200) {
          alert("서버 상태를 확인해주세요.");
          console.log("error", res.statusText);
        } else {
          if (!res.data.success) {
            alert("아이디와 비밀번호를 확인해주세요", res.data.errorMessage);
          } else {
            sessionStorage.setItem("userId", res.data.data.account);
            history.push({
              pathname: "/main",
              search: ``,
            });
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("account", { required: true })}
        id="standard-user-id-input"
        className="user-control-input"
        label="로그인 아이디"
        type="text"
        autoComplete="current-user-id"
        variant="standard"
        helperText="Please enter Account"
        margin="dense"
        fullWidth
      />
      {errors.account?.type === "required" && (
        <span className="error_message">아이디를 입력해주세요.</span>
      )}
      <TextField
        {...register("password", { required: true })}
        id="standard-password-input"
        label="비밀번호"
        type="password"
        autoComplete="current-password"
        variant="standard"
        helperText="Please enter Password"
        margin="dense"
        fullWidth
      />
      {errors.password?.type === "required" && (
        <span className="error_message">비밀번호를 입력해주세요.</span>
      )}
      <Button type="submit" id="submit_btn">
        확인
      </Button>
      <Link to="/">
        <p className="forgotPwd">비밀번호를 잊었다면?</p>
      </Link>
    </form>
  );
}

export default Signin;
