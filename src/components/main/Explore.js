import React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from "@mui/material";

import CalendarBox from './CalendarBox';

import { userIdInfo, testFollowerData } from "../../atoms/todoData";
import { useRecoilState } from "recoil";

import '../../stylesheets/Nav.css';


export default function Explore(props) {


    let [testFollower, setTestFollower] = useRecoilState(testFollowerData);
    let testarray = JSON.parse(JSON.stringify(testFollower));

    let [dtUser, setDtUser] = useRecoilState(userIdInfo);
    let userData = JSON.parse(JSON.stringify(dtUser));

    let calendarData = props.calendarData;
     //목표 생성 페이지 이동
    function moveExForm(){
        window.location.replace("/exploreSearch")
    }

    return (
        <Box 
            className='explore-wrap' 
            sx={{ position: 'relative', width: '24vw', minWidth: '350px', top: 0, padding: '2em'}} >        
            
            <Stack direction="row" spacing={1} className='avatar-wrap'>
                
            { userData.map((user, idx)=>{
                return (
                    <React.Fragment >
                        
                        <Avatar id={idx} sx={{ backgroundColor: '#f5f5f5', color: '#111', fontWeight: 'bold', border: '2px solid #222', zIndex: 1 }}>
                            {user.name.charAt(0)}</Avatar>
                    </React.Fragment>
                     
                )
            }) }

                { testarray.map((data, idx)=>{
                    return (
                        <React.Fragment >
                            <Avatar id={idx} 
                            sx={{ backgroundColor: '#f5f5f5', color: '#111', fontWeight: 'bold', border: '2px solid #222', zIndex: 1 }}>{data.following.name.charAt(0)}</Avatar>
                        </React.Fragment>
                     
                    )
                })}
                
                <Avatar sx={{ backgroundColor: '#f5f5f5', color: '#111', fontWeight: 'bold', border: '2px solid #f5f5f5' }}>
                    <NavigateNextIcon onClick={moveExForm} color="disabled"/>
                </Avatar>

            </Stack>

            <div className='explore-user-wrap'>
                { userData.map((user)=>{
                    return (
                        <React.Fragment >
                            <p className='explore-user-name' id={user.id}>{user.name}</p>
                            <p className='explore-user-nickname' id={user.id}>{user.introText}</p>
                        </React.Fragment>
                     
                    )
                }) }
            </div>

            <CalendarBox calendarData={calendarData} />       
        </Box>
    );
}