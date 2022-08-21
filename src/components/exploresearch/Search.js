import React, { useState } from 'react'

import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState, selectedDataState } from "../../atoms/todoData";


import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import SearchUsers from './SearchUsers';

import '../../stylesheets/Search.css';

//  ** 할일 **
// *** 검색어 입력 -> 엔터 뒤에 한번에 검색하기 로 로직 변경하기 
// -> enter 이벤트 - button화 -> 요청한 데이터 받기로 변경 

// ✔ filter 함수 : 입력받는 string에 매치되는 아이디 불러와 보여주기

// 유저 리스트-> 유저 클릭 -> 유저 feed 이동 -> 팔로우 버튼 -> event: isfollowing: true 생성 또는 변경 

// 받아와야 하는 값 
// -user id 입력-> filter -> 출력 user nickname 


// state 테스트 더미 데이터 시작 
const usersData = [
  {
    "id": 1,
    "userId": "test",
    "name": "test123",
    "introText": "hello",
    "emailSearchYn": "N",
    "randomYn": "Y"
  },
  {
    "id": 2,
    "userId": "test1",
    "name": "팔로우테스트1",
    "introText": "팔로우테스트1 투두입니다~~",
    "emailSearchYn": "Y",
    "randomYn": "Y"
  },
  {
    "id": 3,
    "userId": "test2",
    "name": "팔로우테스트2",
    "introText": "팔로우테스트2 투두입니다~~",
    "emailSearchYn": "Y",
    "randomYn": "Y"
  },
]

export default function Search() {

// "emailSearchYn" Y/N 확인 필요 

  const [searchTerm, setSearchTerm] = useState("");
  const [searchedUsers, setSearchedUsers] = useRecoilState(searchState);

  const [searchingUsers, setSearchingUsers] = useState([]);

  console.log('searchedUsers', searchedUsers);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      //setSearchedUsers(searchContact(searchedUsers))
      setSearchingUsers(searchContact(searchedUsers))
      console.log('searching', searchingUsers);
      setSearchTerm("");
    }
  }


  const searchContact = (dataset) => {

    return dataset.filter((data) => {
      if (searchTerm === "") {
        return null
      } else if (
        data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.userId.toLowerCase().includes(searchTerm.toLowerCase())
      ) return data

    })
  }


  return (
    <div className="search-search-list-wrap" >
      <TextField className="search-blank" fullWidth hiddenLabel id="filled-basic"
        size="small" variant="filled" placeholder="email ,ID 검색"
        sx={{ boxShadow: 'none', '& .MuiFilledInput-root': { backgroundColor: '#f5f5f5', borderRadius: 2, fontSize: 14, color: '#080808' } }}

        type="text"

        onChange={onInputChange}
        onKeyPress={keyPressed}
        value={searchTerm}

        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" className="search-list-icon" />
            </InputAdornment>
          ),
        }}>
      </TextField>

      {searchingUsers.length > 0 ?

        <React.Fragment>

          {searchingUsers.map((data) => {
            return (
              <SearchUsers data={data} searchTerm={searchTerm} key={data.id} />
            )})}</React.Fragment> : <div className="null-text">목록 없음</div>}

    </div>

  )
}