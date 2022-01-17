import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../stylesheets/Signin.css';
import { TextField } from '@mui/material';
import { Route, Link } from 'react-router-dom';

import BasicNavBar from './BasicNavBar';
import More from './More';

function Join(){

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
  

    return (

    <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
    {...register("Email")} 
        id="standard-email-input"
        label="이메일"
        type="email"
        autoComplete="current-email"
        variant="standard"
        helperText="Please enter Email"
        margin="dense"
        fullWidth 
      />
      <TextField
       {...register("Password")} 
        id="standard-password-input"
        label="비밀번호"
        type="password"
        autoComplete="current-password"
        variant="standard"
        helperText="Please enter Password"
        margin="dense"
        fullWidth 
      />
      <input className="join_btn" type="submit" value={"확인"}/>
      <div className='join_txt'>
          <p>
          가입하면: <br />
          • 다른 기기에서 로그인 가능합니다.<br />
          • 다른 사용자들과 함께 할 수 있습니다.
          </p>
          <p>가입 시 다음 사항에 동의하는 것으로 간주합니다. &nbsp;
          <Link to="/text/use" className='termOfUse'>이용약관</Link>과 <Link to="/text/policy" className='policy'>개인정보 정책</Link>
         
          </p>
      </div>
      </form>
)

}

export default Join;

