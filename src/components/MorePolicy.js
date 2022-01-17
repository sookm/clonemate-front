import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import '../stylesheets/More.css';
import { TextField } from '@mui/material';
import { Route, Link } from 'react-router-dom';

import BasicNavBar from './BasicNavBar';

function MorePolicy(){

    // 1) className='textOfUSe' 와 className='textOfPolicy' 의 -> 같은 링크, 다른 페이지 해결 하기 
    // 2) 스크롤바 모양 변경 하기 
    // 3) NavBar fontsize 변경 하기 
    return (

    <form className='formOfText'>
      <div className='textOfUse'>
          
      Personal Information Processing Policy (Privacy Policy) <br />
      <br />
      In accordance with Article 30 of the Personal Information Protection Act, "todo list" 
      has the following policies to protect personal information and effectively deal with personal information related 
      complaints. In order to smoothly handle complaints related to personal information, we have the following 
      policy. <br />
      Based on this policy, each affiliate establishes its personal information processing policy for application. <br />
      <br />
      1. Purpose of Processing Personal Information <br />
      "todo list" will do its best to protect personal information and guarantee the 
      customer’s rights. Shinhan Financial Group only holds the minimum amount of personal information required 
      for the following purposes: "todo list" collects and holds personal information based 
      on the relevant laws and regulations, subject to customer’s consent for the purpose of business processing 
      activities such as personnel management. <br />
      <br />
      2. Processing and Retention Period of Personal Information <br />
      "todo list" processes and retains customer information in accordance with relevant 
      laws and regulations during the period in which the validity or liability remains or the value as evidentiary data 
      continues. <br />
      <br />
      3. Third party provision of personal information <br />
      Customer information handled by "todo list" is provided only to the affiliates of 
      Shinhan Financial Group, as long as it is deemed acceptable in the relevant laws, such as the Financial Holding 
      Company Act. <br />
      <br />
      4. Consignment of personal information processing <br />
      "todo list" is making efforts to protect personal information by clearly stipulating 
      compliance with related laws and regulations, prohibiting third parties from sharing personal information, and 
      signing and storing the contents of the agreement when it consigns personal information processing services. <br />
      <br />
      5. Rights, duties and methods of the information entity <br />
      You may require us to view personal information processed by our company about you and children under the 
      age of 14 (legal guardian only). If you view your personal information, you may ask us to correct or delete the 
      personal information that is different from the fact or cannot be verified.
      However, if another regulation specifies that certain personal information shall be collected, the request for 
      deleting the information cannot be processed. <br />
      You may request us to suspend your personal information. However, in any of the following cases, the 
      Company may notify the customer of the concerned grounds and may refuse to suspend the processing. 
      Customers who view their personal information may request correction or deletion of personal information that 
      is not true or that cannot be verified and in the following cases: <br />
      1 If there is a special regulation or if it is inevitable to comply with the statutory obligations <br />
      2 If there is a risk of harming the life or body of another person or there is a possibility of unfairly infringing the 
      property and other benefits of another person. <br />
      3 When it is difficult to transfer the contract, for instance: in cases where it is not possible to provide the 
      contracted service to the customer, if the personal information is not processed. And also if the customer 
      does not clearly indicate an intention to terminate the contract. <br />
      (Form 1) Request of personal information for viewing, correction, deletion, suspension of data processing <br />
      (Form 2) Power of attorney on Personal Information for viewing, correction, deletion, suspension of data 
      processing <br />
      <br />
      6. Personal information to be processed <br />
      "todo list" handles information like customer names, unique identification numbers, addresses, 
      and contact information for business purposes, such as providing customer service for affiliates within the 
      "todo list" and personnel management of internal employees. <br />
      <br />
      7. Destruction of personal information <br />
      Personal information of "todo list" is permanently deleted from electronic personal 
      information system at the time of achieving the purpose of processing or retention period. Personal information 
      on written document is shredded or incinerated. <br />
      <br />
      8. Measures to ensure the safety of personal information <br />
      To secure the security of personal information, "todo list" handles personal 
      information processed electronically safely through measures like installing firewalls and controlling the access. <br />
      Written personal information is stored in a safe deposit box or cabinet. It is strictly managed and controlled by 
      allowing access to only authorized employees. <br />
      Risk pertaining to the handling of personal information is managed by the risk and compliance management 
      system of "todo list", and we are regularly reviewing the risks and taking mitigating actions to 
      prevent related risks. We also ensure the safety of personal information by applying the principle of zerotolerance in cases of breach of personal information based on the compliance management system. <br />
      <br />
      9. Change of personal information processing policy <br />
      When Shinhan Financial Holding Company changes its policy on personal information, it discloses the timing 
      and enforcement of changes, continuously updates the changed details, and discloses modifications before and 
      after the changes so that customers can easily check the details of change. <br />
      <br />
      10. Remedial Actions on Infringement of rights <br />
      "todo list" will do its best to protect the customer rights and prevent damages. <br />
      In the event of leakage of personal information and infringement of rights, please contact the following 
      department. <br />
      <br />
      11. Personal Information Protection Manager <br />
      The person who supervises personal information protection in accordance with Article 31 of the Personal 
      Information Protection Act shall be as follows. <br />
      <br />
      Announcemnet date : January 17, 2022 <br />
      Effective date : January 17, 2022 <br />
      <br />

      </div>
    </form>
    )

}

export default MorePolicy;
