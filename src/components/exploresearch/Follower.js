import React, { useEffect, useState } from "react";
import { getTodosDataSample } from "../../api/apiCommunicate";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


import List from '@mui/material/List';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import "../../stylesheets/Follow.css";

// usestate 생성 -> 팔로워 삭제 시 화면에서만 일시적으로 저장되도록 우선 구현 
// 각 유저 클릭 -> 해당 유저 feed로 이동 
// Dialog> 마우스 호버 변경, Dialog 위치 조정, height 등 style 변경


// state 테스트 더미 데이터 시작 
const FollowerData = [
  {
    "following": {
        "introText": "팔로우테스트1 투두입니다~~",
        "email": "77777@gmail.com",
        "account": "test1",
        "name": "팔로우테스트1",
        "id": 1
    },
    "id": 1
  },
  {
    "following": {
      "introText": "🥛팔로우테스트2 투두입니다~~",
      "email": "5555@gmail.com",
      "account": "test1",
      "name": "팔로우테스트2",
      "id": 2
    },
    "id": 2
  },
  {
    "following": {
       "introText": "팔로우테스트3 투두입니다~~",
        "email": "6666@gmail.com",
        "account": "test1",
        "name": "팔로우테스트3",
        "id": 3
    },
    "id": 3
  },
]


export default function Follower() {
  
  const [data, setData] = useState([]);

  const getData = () => {
    axios({
      method: `GET`,
      url: `https://clonetodo.herokuapp.com/users/1`,
      header: {
        "Content-Type": "application/json"
      },
  })
    .then(response => {
      setData(response.data);
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);


  let [follower, setFollower] = useState(FollowerData);
  let testarray = JSON.parse(JSON.stringify(follower));
  const isThereFollower = testarray.length;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

const deleteFollower = (e) => {
    
    let selectedId = e.target.id;
    console.log('selected', selectedId);
    const thisData = [...follower];

    const removeArr = thisData.filter(followers => followers.id !== parseInt(selectedId));

    setFollower(removeArr); 
    console.log('newarray', removeArr);
     
    setOpen(false);
    //window.location.replace(`/exploreSearch/`);
      
  };


    return (
      
      <div className="follow-follow-list-wrap" >
        <div>{JSON.stringify(data)}</div>
        {isThereFollower ? <React.Fragment>

          {testarray.map((data) => { 
          
            return (
           
              <List 
                sx={{ width: '100%'}}
                style={{position:'relative'}} 
                key={data.id}  disablePadding>
                      
                <div className="follow-list-box" key={data.id}>      
                  <div className='setting-settings-list-wrap' id={data.id} >

                    <div className="setting-list-box" id={data.following.id}>
                      <div className="settings-list-text" ><p>{data.following.name}</p></div>
                      <div className="follow-list-name-icon-wrap"  onClick={handleClickOpen} sx={{ color:"black"}}>
                      <MoreHorizIcon color="disabled" className="follow-list-name-icon"/></div>
                    </div>
                                            
                    <div className="follows-list-box" id={data.following.id}>
                      <div  className="follow-list-button" id={data.following.id}>
                          <p className="follow-list-text" >{data.following.introText}</p>
                      </div> 
                    </div>

                  </div>

                  <Dialog
                     sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 432 } }}
                    maxWidth="sm" open={open} >
                      <Stack spacing={1} >
                        <Button autoFocus id={data.following.id} key={data.following.id} onClick={deleteFollower}  color="error">팔로워 삭제</Button>
                        <Button onClick={handleClose}>취소</Button>
                      </Stack>           
                  </Dialog>

                </div> 
 
              </List>  )})}</React.Fragment> : <div className="null-text">목록 없음</div> }

      </div>
    )} 