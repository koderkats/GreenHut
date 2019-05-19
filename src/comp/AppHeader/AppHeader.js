// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'
import Divider from '../../comp/Divider/Divider'
import u from '../../lib/util/util'
import api from '../../lib/api/api'
import s from './AppHeader.css'

const thisFile = 'AppHeader.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function AppHeader(props: Props) {
  const thisFunc = 'AppHeader'
  g.func(thisFile, thisFunc, props);

  const [state, setState] = useContext(g.GlobalContext);
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');

  const [user, setUser] = useState(g.initialState.user);

  useEffect(() => {
    g.func(thisFile, thisFunc + ':useEffect');

    api.getUser(1).then((user)=>{
      g.func(thisFile, thisFunc + ':useEffect:api.getUser:resolved', user);
      setUser(user);
      const newState = {page:'random', count:84}
      if (state.page !== newState.page && state.count !== newState.count) {
        setState(newState);
      }
  
    });

  }, []);

  return (
    <div comp={thisFunc} data-app-header alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>

      <div data-segment>
        <div data-cont>
          <div data-item="1">1</div>
          <div data-item="2">2</div>
          <div data-item="3">3</div>
        </div>
      </div>

      <div data-item="1" data-right>1</div>
      <div data-item="2" data-right>{user.email}</div>
      <div data-item="3" data-right>{g.toUpperCase(user.alias, 'first')}</div>
      <div data-item="4" data-right>{user.id}</div>
    </div>
  );

}

export default AppHeader

const style = (props: Props) => ({
});
