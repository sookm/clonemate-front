import React, { useState } from 'react'

import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import '../../stylesheets/Search.css';

//  ** 할일 **
// textField -> onchange filter 함수 만들기 
// -> enter event 시 filter 하는 순서로


const Data = [
  { "strUserName": "주영", "todo_id": "0", "title": "🥛우유마시기" },
  { "strUserName": "🍈메로나", "todo_id": "1", "title": "공부하기" },
  { "strUserName": "두두", "todo_id": "5", "title": "스터디카페가기" },
  { "strUserName": "나야", "todo_id": "7", "title": "8시간 자기" }
]
//console.log(Data);

export default function Search() {

    const [searchTerm, setSearchTerm] = useState("");
  
    return (
      <div className="search-search-list-wrap">
            <TextField 
                className="search-blank"
                fullWidth  
                hiddenLabel
                id="filled-basic"
                size="small"
                variant="filled"
                placeholder="email ,ID 검색"
                sx={{ boxShadow: 'none', '& .MuiFilledInput-root': { backgroundColor:'#f5f5f5', borderRadius: 2, fontSize: 14, color: '#080808',}}}    
                
                onChange={(event) => {setSearchTerm(event.target.value);}}
        
                InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" className="search-list-icon" />
                  </InputAdornment>
                ),
              }}
            >
            </TextField>

            {Data.filter((data)=> {
              if (searchTerm === "") {
                return data
              } else if (data.strUserName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return data
              } else if (data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return data
              }
            }).map(data=>{
              return(
                <React.Fragment key={data.todo_id}>
                  <div className="search-list-box" key={data.todo_id}>
                    <Button className="search-list-button" id={data.todo_id} name={data.todo_id}>
                        <div className="search-list-name" id={data.strUserName} name={data.strUserName}>
                          <p>{data.strUserName}</p>
                        </div>
                        <div className="search-list-text" id={data.title} name={data.title}>
                          <p>{data.title}</p>
                        </div>
                    </Button>
                  </div>

                </React.Fragment>
               
               );

              })}
                
    
      </div>
    
    )}