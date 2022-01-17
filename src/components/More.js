import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../stylesheets/More.css';
import { TextField } from '@mui/material';
import { Route, Link } from 'react-router-dom';

import BasicNavBar from './BasicNavBar';

function More(){

    // 1) className='textOfUSe' 와 className='textOfPolicy' 의 -> 같은 링크, 다른 페이지 해결 하기 
    // 2) 스크롤바 모양 변경 하기 
    // 3) NavBar fontsize 변경 하기 
    return (

    <form className='formOfText'>
      <div className='textOfUse'>
          
        "todo list" Term of Use <br />
        <br />
        "todo list" and "todo list" related to the use of serviced related to the requirements are defined. <br />
        <br />
        This Privacy Policy (the "Policy") explains the way of treatment of the information which is 
        provided or collected in the websites on which this Policy is posted. <br />
        <br />
        In addition the Policy also explains the information which is provided or collected in the course of using the applications 
        of the Company which exist in the websites or platforms of other company. <br /> 
        <br />
        Through this Policy, the Company regards personal information of the users as important and inform them of the purpose and method of Company's using the personal information 
        provided by the users and the measures taken by the Company for protection of those personal information. <br />
        <br />
        This Policy will be effective on the ___th day of ____, 2015 and, in case of modification thereof, the Company will make public notice of it through posting it on the bulletin board of 
        Company's website or individual notice through sending mails, fax or e-mails). <br />
        <br />
        1. Information to be collected and method of collection <br />
        <br />
        ① Personal information items to be collected <br />
        Personal information items to be collected by the Company are as follows: <br />
        • Information provided by the users <br />
        The Company may collect the information directly provided by the users. <br />
        [Option to select 'personal information items' in Appendix '1-1' of Personal Privacy Policy] <br />
        • Information collected while the users use services <br />
        Besides of information directly provided by the users, the Company may collect information in the course that the users use the service provided by the Company. <br />
        [Option to select 'personal information items' in Appendix '1-2' of Personal Privacy Policy] <br />
        <br />
        ② Method of collection <br />
        The Company collects the information of users in a way of the followings: <br />
        [Option to select 'method of collection' in Appendix '2' of Personal Privacy Policy] <br />
        <br />
        2. Use of collected information <br />
        The Company uses the collected information of users for the following purposes: <br />
        [Option to select 'use of collected information' in Appendix '3' of Personal Privacy Policy] <br />
        The Company agrees that it will obtain consent from the users, if the Company desires to use the information other than those expressly stated in this Policy. <br />
        <br />
        3. Sharing collected information <br />
        Except for the following cases, the Company will not share personal information with a 3rd party: <br />
        • when the Company shares the information with its affiliates, partners and service providers; <br />
        [Option to select 'sharing of collected information' in Appendix '4-1' of Personal Privacy Policy] <br />
        <br />
        • when the users consent the sharing in advance; <br />
        [Option to select 'sharing of collected information' in Appendix '4-2' of Personal Privacy Policy] <br />
        <br />
        • when the sharing is required by the laws <br />
        - if required to be disclosed by the laws and regulations; or <br />
        - if required to be disclosed by the investigative agencies for detecting crimes in accordance with the procedure and method as prescribed in the laws and regulations <br />
        <br />
        End.

      </div>
    </form>
    )

}

export default More;

