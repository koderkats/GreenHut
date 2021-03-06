// @flow

import React, {useContext, useState, useEffect} from 'react'
import { hot } from 'react-hot-loader'
import g from './global'
import { GlobalContext } from "./context";

import Debug from '../comp/all/Debug'
import Divider from '../comp/all/Divider'
import AppHeader from '../comp/all/AppHeader'
import DashboardBridge from '../comp/all/DashboardBridge'
import DashboardContent from '../comp/all/DashboardContent'
import Counter from '../comp/all/Counter'
import TaskList from '../comp/all/TaskList'
import TasksTab from '../comp/tabs/TasksTab'



// export const GlobalContext = React.createContext(g.state);


const thisFile = 'AppStateful.js'

type Props = {
  alias?: String,
}

function AppStateful(props: Props) {
  const thisFunc = 'AppStateful'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);


  // const [state, setState] = useState(g.state);
  // g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');
  // const [state, setState] = useContext(g.GlobalContext);

  // const globalContext = useContext(GlobalContext);
  // // const { state, setState } = globalContext;
  // const [state, dispatch] = useReducer
  // g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');



  // useEffect(()=>{
  //   g.func(thisFile, thisFunc + ':useEffect [SET_INITIAL_STATE]');

  //   window.addEventListener('resize', () => {
  //     // g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT, [ON_RESIZE]');
  //     setState(Object.assign({}, state, {
  //       app: {
  //         ...state.app,
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //         widthHeight: `${window.innerWidth}x${window.innerHeight}`,
  //       },
  //       appHeader: {
  //         ...state.appHeader,
  //         height: document.querySelector(`.AppHeader`).clientHeight,
  //       },
  //       dashboardBridge: {
  //         ...state.dashboardBridge,
  //         height: document.querySelector(`.DashboardBridge`).clientHeight,
  //       },
  //       dashboardContent: {
  //         height: window.innerHeight - document.querySelector(`.AppHeader`).clientHeight - document.querySelector(`.DashboardBridge`).clientHeight
  //       }
  //     }));
  //   });
  // },[]);

  // useEffect(()=>{
  //   if (!state.app.widthHeight || state.app.widthHeight === '') {
  //     alert('APP_STATEFUL');
  //     g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT, [REDUCER]');

  //     // setState(Object.assign({}, state, {
  //     //   app: {
  //     //     ...state.app,
  //     //     width: window.innerWidth,
  //     //     height: window.innerHeight,
  //     //     widthHeight: `${window.innerWidth}x${window.innerHeight}`,
  //     //   },
  //     //   appHeader: {
  //     //     ...state.appHeader,
  //     //     height: document.querySelector(`.AppHeader`).clientHeight,
  //     //   },
  //     //   dashboardBridge: {
  //     //     ...state.dashboardBridge,
  //     //     height: document.querySelector(`.DashboardBridge`).clientHeight,
  //     //   },
  //     //   dashboardContent: {
  //     //     height: window.innerHeight - document.querySelector(`.AppHeader`).clientHeight - document.querySelector(`.DashboardBridge`).clientHeight
  //     //   }
  //     // }));
  //   }
  // });
  
  return (<>
      <Counter/>
      <Debug/>
      <style dangerouslySetInnerHTML={{__html: g.styler(AppStatefulStyle, null/* state */, thisFunc)}} />
      {/* <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} data-app-page={state.dashboardBridge.activePage} data-dbb-tab={state.dashboardBridge.activeTab}> */}
      <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} data-app-page={'default'} data-dbb-tab={'mytasks'}>
          {/* <AppHeader/>
        <Divider/>
        <DashboardBridge/>
        <DashboardContent>
          {state.dashboardBridge.activeTab === 'tasks' ? <TasksTab/> : ''}
          {state.dashboardBridge.activeTab === 'convos' ? <div>CONVOS</div> : ''}
          {state.dashboardBridge.activeTab === 'notes' ? <div>NOTES</div> : ''}
          {state.dashboardBridge.activeTab === 'files' ? <div>FILES</div> : ''}
        </DashboardContent> */}
      </div>
  </>)
}

export default AppStateful

const style = (props: Props) => ({});

export function AppStatefulStyle(state, thisFunc) {
  return `
  body {
    margin:0;
    width:100%;
    height:100%;
    background:white;
    color:black;
    font-family:arial;
    font-size:16px;
    overflow:hidden;
  }
  div {
    box-sizing:border-box;
    display:inline-block;
  }
  .app-container {
    display:block;
    position:absolute;
    width:100%;
    min-height:100%;
  }  
  `
}

