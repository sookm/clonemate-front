/* eslint-disable */

import React, { useRef, useState } from "react";
import { Button  } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { koKR } from '@mui/material/locale';
import { Switch, Route, useHistory } from "react-router-dom";
import {Helmet} from "react-helmet";

import Signin from "./usercontrol/Signin";
import Join from "./usercontrol/Join";
import BasicNavBar from "./nav/BasicNavBar";
import Goals from "./goal/Goals";
import Main from "./main/Main";
import OrderItem from "./order/OrderItem";
import GoalForm from "./goal/GoalForm";
import GoalEditForm from "./goal/GoalEditForm";
import ExploreSearch from "./exploresearch/ExploreSearch";
import Routines from "./routines/Routines";
import Setting from "./nav/Setting";
import Text from "./tabmenu/Text";
import TermUse from "./tabmenu/TermUse";
import Policy from "./tabmenu/Policy";
import Announce from "./tabmenu/Announce";
import FeedSetting from "./tabmenu/FeedSetting";

import "../stylesheets/App.css";

import { goalsData } from "../atoms/todoData";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
  typography: {
    Link: {
      color: '#222',
    },
    bolder: {
      fontWeight: 600,
    },
    button: {

    },
  },
  palette: {
    btn: {
      main: "#f2f2f2",
      contrastText: "#111",
    },
    basicnav: {
      main: "#fefefe",
      contrastText: "#111",
    },
    mainnav: {
      main: '#FAFAFA'
    }
  },
  koKR,

});

function App() {
  
  /* Hook 선언 시작 */
  
  let history = useHistory();


  /* Hook 선언 끝 */


  /* 함수 선언 시작 */


  /* 함수 선언 끝 */


  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>todo mate</title>
            </Helmet>

            <div className="header">
              <img className="main_img" src="./images/todomate.jpg" />
              <h1>todo mate</h1>
              <h3>할 일을 작성, 계획, 관리하세요.</h3>
            </div>
            <div className="start_btn">
              <Button 
                className="join_link_btn" 
                color="btn"
                variant="contained" 
                sx={{ boxShadow: 'none'}}
                onClick={() => {
                  history.push("/join");
                }}
              >
                가입하기
              </Button>
              <Button
                className="signin_ link_btn"
                color="btn"
                variant="contained"
                sx={{ boxShadow: 'none'}}
                onClick={() => {
                  history.push("/signin");
                }}
              >
                로그인
              </Button>
            </div>
          </div>
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/join">
        <BasicNavBar/>
          <Join />
        </Route>
        <Route exact path="/signin">
        <BasicNavBar/>
          <Signin />
        </Route>
        <Route exact path="/goals">
        <BasicNavBar/>
          <Goals  />
        </Route>
        <Route exact path="/goals/goalForm">
         <BasicNavBar/> 
         <GoalForm />  
        </Route>
        <Route exact path="/goals/goalEditForm/:originID">
        <BasicNavBar/> 
         <GoalEditForm />  
        </Route>
        <Route exact path="/orderitem">
        <BasicNavBar/> 
         <OrderItem />  
        </Route>
        <Route exact path="/routines">
        <BasicNavBar/> 
         <Routines />  
        </Route>
        <Route exact path="/exploreSearch">
        <BasicNavBar/>
          <ExploreSearch />
        </Route>
        <Route exact path="/setting">
        <BasicNavBar/>
          <Setting />
        </Route>
        <Route exact path="/feedsetting">
        <BasicNavBar/>
          <FeedSetting />
        </Route>
        <Route exact path="/text">
        <BasicNavBar/>
          <Text />
        </Route>
        <Route exact path="/termUse" component={TermUse}/>
        <Route exact path="/policy" component={Policy}/>
        <Route exact path="/announcements" component={Announce}/>
        </Switch>
    </ThemeProvider>
  );
}

export default App;