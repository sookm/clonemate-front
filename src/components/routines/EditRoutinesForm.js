import React, { useEffect, useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button } from "@mui/material";

import { objDatesData, objTodosDataResult } from "../../atoms/todoData";

import RoutineDayModal from './RoutineDayModal';
import RoutineDateModal from './RoutineDateModal';


// 할 일 클릭 - 수정 모달 - input 생성
export default function EditRoutinesForm(props) {

        /* atom 선언 시작 */
        const [dtDate, setDtDate] = useRecoilState(objDatesData);
        const [dtTodos, setDtTodos] = useRecoilState(objTodosDataResult);
    
        /* atom 선언 종료 */

        /* state 선언 시작 */

        const todos = props.todos;

        let [dayActiveBoolean, setDayActiveBoolean] = useState(false);
        let [dateActiveBoolean, setDateActiveBoolean] = useState(false);
        //날짜 선택 캘린더 모달 등장 시 입력할 날짜 정보가 어디인지 (date, endRepeatDate)
        let [location, setLocation] = useState(null)
        //위의 location 처럼 edit에서 작업한다는 신호
        let position = 'edit'

        let [editRoutinesState, setEditRoutinesState] = useState(todos);
        console.log("editRoutinesState",editRoutinesState)

        const dayArr = [
        { dayEng : 'SUN', dayKor : '일', checkYn: editRoutinesState.repeatDays['SUN']},
        { dayEng : 'MON', dayKor : '월', checkYn: editRoutinesState.repeatDays['MON']},
        { dayEng : 'TUE', dayKor : '화', checkYn: editRoutinesState.repeatDays['TUE']},
        { dayEng : 'WEN', dayKor : '수', checkYn: editRoutinesState.repeatDays['WEN']},
        { dayEng : 'THU', dayKor : '목', checkYn: editRoutinesState.repeatDays['THU']},
        { dayEng : 'FRI', dayKor : '금', checkYn: editRoutinesState.repeatDays['FRI']},
        { dayEng : 'SAT', dayKor : '토', checkYn: editRoutinesState.repeatDays['SAT']},
        ];

        /* state 선언 종료 */

        /* 함수 선언 시작 */

        const checkDate = dayArr.filter(data=>{
            if(data['checkYn'] === "Y") return data
        })

        /* 함수 선언 종료 */

    return(
        <div className="edit-routines-input-Box">
        <RoutineDayModal 
        dayActiveBoolean={dayActiveBoolean} 
        setDayActiveBoolean={setDayActiveBoolean} 
        dayArr={dayArr}
        editRoutinesState={editRoutinesState}
        setEditRoutinesState={setEditRoutinesState}
        position={position}
        />
        <RoutineDateModal 
        dateActiveBoolean={dateActiveBoolean}
        setDateActiveBoolean={setDateActiveBoolean}
        editRoutinesState={editRoutinesState}
        setEditRoutinesState={setEditRoutinesState}
        location={location}
        />
        <div className="routines-input-title-field">
            <div className="routines-input-startdate-field" onClick={()=>{
                setDateActiveBoolean(true)
                setLocation(`date`)
                }}>
                <span>시작 날짜</span>
                <input id="start-date-input" className="routines-startdate-input"  type="text" value={editRoutinesState.date} readOnly /> 
            </div>
            <div className="routines-input-enddate-field"
            onClick={()=>{
                setDateActiveBoolean(true)
                setLocation(`endRepeatDate`)
                }} >
                <span>종료 날짜</span>
                <input id="end-date-input" className="routines-enddate-input" type="text" value={editRoutinesState.endRepeatDate} readOnly /> 
            </div>
            <div className="routines-input-day-field" onClick={()=>{setDayActiveBoolean(true)}} >
                <span className="routines-input-day-field-title">반복 요일</span>
                <div className="routines-day-text-wrap">
                    {checkDate.map((data)=>{
                        return <span className="routines-day-text" key={data.dayEng}>{data['dayKor']}</span>
                    })}
                </div>
            </div>
            <Button type="submit" className="routines-input-btn" >등록</Button>
        </div>
    </div>

    )

}