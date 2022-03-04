import { atom } from "recoil";

//아톰 예시 입니다.
export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const today = new Date();
const tomorrow = new Date(today);
const nextDay = new Date(tomorrow.setDate(today.getDate()+1))

// Goal, Todo 캘린더 모달용 날짜 state
export const datesData = atom({
  key: 'datesData',
  default : {
    "dtToday" : today.toJSON().substring(0, 10),
    "dtTomorrow" : nextDay.toJSON().substring(0, 10)
  }

})
export const selectedNewDate = atom({
  key: "selectedNewDate",
  default: new Date()
})

export const selectedNewEndDate = atom({
  key: "selectedNewEndDate",
  default: new Date()
})

// Feed 좌측 캘린더 state -> CalendarBox 컴포넌트에서 dtFeedCalendarOverview 로 사용
export const objFeedCalendarOverview = atom({ // 로딩 시 현재 달의 데이터 전부 // <> 클릭하면 다시 데이터 받기
    key: 'objFeedCalendarOverview', // unique ID (with respect to other atoms/selectors)
    default: [ {
              "numTodoYear": 2022,          //연도
              "numTodoMonth": 2,            //월
              "numMonthTodoCount": 11,      //해당 월 투두 개수
              "arrTodoInfo": [
                {
                  "numTodoDay": 2,             //일
                  "numTodoCount": 1,            //해당 연월일 투두 개수
                  "ynComplete": "Y",            //해당 연원일 투두 전부 완료 여부
                },
              ]
          },
          {
            "numTodoYear": 2022,          //연도
            "numTodoMonth": 2,            //월
            "numMonthTodoCount": 11,      //해당 월 투두 개수
            "arrTodoInfo": [
              {
                "numTodoDay": 23,             //일
                "numTodoCount": 5,            //해당 연월일 투두 개수
                "ynComplete": "N",            //해당 연원일 투두 전부 완료 여부
              },
            ]
        } ,
        ]
  });// default value (aka initial value)

// todo 더미데이터 수정 220304

// 
export const objTodosDataResult = atom({
  key: 'objTodosDataResult',
  default: [
  {
  goalTitle : "첫 번째 목표",
  goalOrderNo : 1,
  goalTitleColor : "#cccccc",
  todos : [
       {goalId: 1,
        todoId: 1,
        orderNo: 1,
        title: "첫 번째 목표의 첫 번째 할 일",
        date: "2022-02-13",
        endRepeatDate: "2022-02-13",
        repeatDays: {
          THU: "N",
          WEN: "N",
          TUE: "N",
          SAT: "N",
          FRI: "N",
          MON: "N",
          SUN: "N"
        },
        checkYn: "N"
        },
        {goalId: 1,
          todoId: 1,
          orderNo: 2,
          title: "첫 번째 목표의 두 번째 할 일",
          date: "2022-02-13",
          endRepeatDate: "2022-02-14",
          repeatDays: {
            THU: "N",
            WEN: "N",
            TUE: "N",
            SAT: "N",
            FRI: "N",
            MON: "N",
            SUN: "N"
          },
          checkYn: "N"
      },
      {goalId: 1,
        todoId: 1,
        orderNo: 2,
        title: "첫 번째 목표의 세 번째 할 일",
        date: "2022-02-13",
        endRepeatDate: "2022-02-17",
        repeatDays: {
          THU: "N",
          WEN: "Y",
          TUE: "N",
          SAT: "N",
          FRI: "Y",
          MON: "N",
          SUN: "N"
        },
        checkYn: "N"
      },
  ]}
]
})



export const goalsData = atom({ // 로딩 시 모든 목표 뿌리기
  key: "goalsData",
  default: [
    {
      "goal_id": 0,
      "next_goal_id": 1,
      "title": "첫 번째 목표",
      "privacy": "PUB",
      "box_color": "",
      "title_color": "#3CB371"
    },
    {
      "goal_id": 1,
      "next_goal_id": 2,
      "title": "두 번째 목표",
      "privacy": "PRI",
      "box_color": "",
      "title_color": "#234d22"
    },
    {
      "goal_id": 2,
      "next_goal_id": 3,
      "title": "세 번째 목표",
      "privacy": "PRI",
      "box_color": "",
      "title_color": "#C71585"
    },
    {
      "goal_id": 3,
      "next_goal_id": 4,
      "title": "네 번째 목표",
      "privacy": "PRI",
      "box_color": "",
      "title_color": "#21bdbd"
    }
  ]
})


export const createRepeatDay = atom({
  key: "createRepeatDay",
  default: {
  "sun": "N", //y 면 일요일 반복, n 이면 반복 x
  "mon": "N",
  "tue": "N",
  "wed": "N",
  "thu": "N",
  "fri": "N",
  "sat": "N",
}
});

export const todoData = atom({ // 로딩 시 오늘 값 받아오기 // 캘린더에서 날짜 클릭하면 해당 날짜로 값 받아오기 // 더미 데이터는 2022-02-05
  key: "todoData",
  default: [
    {
    "todo_id": 0,
    "goal_id": 0, //묶여있는 goal id
    "next_todo_id": 1, //다음 todo id (순서지정용)
    "title": "첫 번째 목표의 할 일 0",
    "date": "2022-02-05",
    "end_repeat_date": "2022-02-05", //반복 종료 일자. 반복 없으면 date 와 값이 같거나 없음
    "repeat_days": {
        "sun": "N", //y 면 일요일 반복, n 이면 반복 x
        "mon": "N",
        "tue": "N",
        "wed": "N",
        "thu": "N",
        "fri": "N",
        "sat": "N",
    },
    "check_yn" : "N" //달성여부
  },
  {
    "todo_id": 1,
    "goal_id": 0, //묶여있는 goal id
    "next_todo_id": 2, //다음 todo id (순서지정용)
    "title": "첫 번째 목표의 할 일 1",
    "date": "2022-02-05",
    "end_repeat_date": "2022-02-05", //반복 종료 일자. 반복 없으면 date 와 값이 같거나 없음
    "repeat_days": {
        "sun": "N", //y 면 일요일 반복, n 이면 반복 x
        "mon": "N",
        "tue": "N",
        "wed": "N",
        "thu": "N",
        "fri": "N",
        "sat": "N",
    },
    "check_yn" : "N" //달성여부
  },
  {
    "todo_id": 0,
    "goal_id": 1, //묶여있는 goal id
    "next_todo_id": 1, //다음 todo id (순서지정용)
    "title": "두 번째 목표의 할 일 1",
    "date": "2022-02-05",
    "end_repeat_date": "2022-02-05", //반복 종료 일자. 반복 없으면 date 와 값이 같거나 없음
    "repeat_days": {
        "sun": "N", //y 면 일요일 반복, n 이면 반복 x
        "mon": "N",
        "tue": "N",
        "wed": "N",
        "thu": "N",
        "fri": "N",
        "sat": "N",
    },
    "check_yn" : "N" //달성여부
  }
]
})

export const todoReadOnly = atom({
  key: "todoReadOnly",
  default: true
})

export const dateCalendarOpen = atom({
  key: "dateCalendarOpen",
  default: false
})

export const endRepeatDateCalendarOpen = atom({
  key: "endRepeatDateCalendarOpen",
  default: false
})

export const repeatDayCalendarOpen = atom({
  key: "repeatDayCalendarOpen",
  default: false
})