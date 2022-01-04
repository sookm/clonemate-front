import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../stylesheets/Signin.css';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import BasicNavBar from './BasicNavBar';

function More(){

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
  
    // className='termOfUSe' 와 className='policy' 의 링크 분리 코드 검색 
    return (

    <form onSubmit={handleSubmit(onSubmit)}>
    
      <div className='termOfUse'> {/* div 넓이 및 폰트 조정 */}
          
        "todo list" Term of Use <br />
        <br />
        "todo list" and "todo list" related to the use of serviced related to the requirements are defined. <br />
        <br />
        Article 1 (Purpose) <br />
        These Terms and Conditions shall be governed by the "todo list"and the rights and dutied of Members in
        connection with the use of the "todo list" and "todo list" serviced provided by "todo list" And
        responsibilities, and other necessary matters.

          
          <p>가입 시 다음 사항에 동의하는 것으로 간주합니다. &nbsp;
          <Link to="/text" className='termOfUse'>이용약관</Link>과 <Link className='policy' to="/text">개인정보 정책</Link>
          </p>
      </div>
      </form>
      )

}

export default More;

