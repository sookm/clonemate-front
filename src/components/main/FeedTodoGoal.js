import React, { useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import FeedTodoData  from "./FeedTodoData";


 export default function FeedTodoGoal(props) {

    const data = props.data; 
    const idx = props.idx;
    const modalOpen = props.modalOpen;
    const onClickGoalHandler = props.onClickGoalHandler;

    return (
        <div className="goals-list-box" key={data.id}>
            <Button className="goals-list-button" id={idx} data-index={idx} data={data} onClick={onClickGoalHandler}>
                <ReceiptIcon className="goals-list-icon" />
                <div className="goals-list-text" id={data.id} name={data.id} style={{ color:data.color }}  ><p>{data.contents}</p>
                </div>
                <p className="goals-list-plus-icon-wrap">
                <AddCircleIcon className="goals-list-plus-icon"/>
                </p>
            </Button>
            <div className="todos-list-cont">
                {data.todos.map((data, idx)=>{
                    return (
                    <React.Fragment key={idx}>
                    <FeedTodoData todos={data} modalOpen={modalOpen} key={'key'+data.id}
                    />
                    </React.Fragment>
                    )
                }) 
                }
            </div>
        </div>
    )

} 