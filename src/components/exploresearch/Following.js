import React, { useEffect, useState } from "react";
import { getTodosDataSample } from "../../api/apiCommunicate";

import List from '@mui/material/List';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import "../../stylesheets/Follow.css";


// state 테스트 더미 데이터 시작 
const FollowingData = [
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


export default function Following() {

  let [following, setFollowing] = useState(FollowingData);
  let testarray = JSON.parse(JSON.stringify(following));
  const isThereFollowing = testarray.length;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

const deleteFollowing = (e) => {
    
    let selectedId = e.target.id;
    console.log('selected', selectedId);
    const thisData = [...following];

    const removeArr = thisData.filter(followings => followings.id !== parseInt(selectedId));

    setFollowing(removeArr); 
    console.log('newarray', removeArr);
     
    setOpen(false);
    //window.location.replace(`/exploreSearch/`);
      
  };


    return (
      <div className="follow-follow-list-wrap" >

        {isThereFollowing ? <React.Fragment>

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
                        <Button autoFocus id={data.following.id} key={data.following.id} onClick={deleteFollowing}  color="error">언팔로우</Button>
                        <Button onClick={handleClose}>취소</Button>
                      </Stack>           
                  </Dialog>

                </div> 
 
              </List>  )})}</React.Fragment> : <div className="null-text">목록 없음</div> }

      </div>
    )} 