// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'
import { GlobalContext } from "../../context";

import api from '../../lib/api/api'
import Divider from '../../comp/Divider/Divider'

const thisFile = 'DashboardBridge.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function DashboardBridge(props: Props) {
  const thisFunc = 'DashboardBridge'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  // const [state, setState] = useContext(g.GlobalContext);

  // useEffect(() => {
  //   g.func(thisFile, thisFunc + ':useEffect');

  //   api.getUser(1).then((user)=>{
  //     g.func(thisFile, thisFunc + ':useEffect:api.getUser:resolved', user);
  //     setState( Object.assign({}, state, {user}) );  
  //   });

  // }, []);

  const globalContext = useContext(GlobalContext);
  const { state, setState } = globalContext;
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');


  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(DashboardBridgeStyle, state, thisFunc)}} />
    <div comp={thisFunc} className={cn(`dashboardbridge`)} alias={props.alias} style={g.style(props, style, thisFunc)}>

      <div className={cn(`segment`)}>
        <div className={cn(`cont-greeting`)}>
            <div className={cn(`greeting`)}><span>|&nbsp;&nbsp;|</span> Workspace</div>
        </div>

        <div className={cn(`cont tabs`)}>
          <div className={cn(`cont cont-left tabs`)}>
          <div className={cn(`tab item`)} tab="tasks" data-active={state.dashboardBridge.activeTab === 'myTasks'}>Tasks</div>
            <div className={cn(`tab item`)} tab="convos" data-active={state.dashboardBridge.activeTab === 'updates'}>Convos</div>
            <div className={cn(`tab item`)} tab="notes" data-active={state.dashboardBridge.activeTab === 'myTasks'}>Notes</div>
            <div className={cn(`tab item`)} tab="files" data-active={state.dashboardBridge.activeTab === 'updates'}>Files</div>
          </div>

          <div className={cn(`cont-right`)}>
            <div className={cn(`item`)}>|&nbsp;&nbsp;|</div>
            <div className={cn(`item`)}>|&nbsp;&nbsp;|</div>
            <div className={cn(`item`)}>|&nbsp;&nbsp;|</div>
          </div>
        </div>

      </div>

    </div>
  </>);

}

export default DashboardBridge

const style = (props: Props) => ({
});


export function DashboardBridgeStyle(state, thisFunc) {
  const bgTab = '#f2f6f6'
  const bgTabBorder = '#ccc'
  const tabSpacing = '10px'
  const itemPadding = '15px'
  const fgGreeting = '#ad9178'

  return `
  .dashboardbridge {
    width:100%;
    border-bottom:1px solid ${bgTabBorder};
    //padding-bottom:1px;
                                                               height:78px;
  }
  .segment {
    padding-left:30px;
    width:100%;
  }
  .cont {
    display:flex;
    flex-direction:row;
    flex-grow:1;
    flex-shrink:1;
    flex-basis:auto;
    max-width:100%;
   }
  .cont-greeting { min-width:480px; }
  .cont-right {
    display:flex;
    padding-left:30px;
  }   


  .greeting {
    font-size:20px;
    color:${fgGreeting};
  }
  .status {
    font-size:16px;
  }
  .item {
    height:40px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    padding-left:${itemPadding};
    padding-right:${itemPadding};
  }
  .tabs {
    padding-top:5px;
  }  
  .tab {
    display: flex;
    flex-shrink: 0;
    min-width:50px;
    padding-left:10px;
    padding-right:10px;
    margin-right:${tabSpacing};
    font-size:16px;
    border-radius: 5px 5px 0 0; 
    background-color:${bgTab};
    border: solid ${bgTabBorder};
    border-width: 1px 1px 0px 1px
  }
  .tab [data-active="true"] {
    background-color:black;
  }  
  .right {
    min-width:50px; float:right;
  }
  `
}






