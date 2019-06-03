import React, { FunctionComponent } from 'react';

import './App.css';

import { RouteTreeComponentProps } from 'app/routing/RouteTreeNode';


export const App: FunctionComponent<RouteTreeComponentProps> = function App(props) {
  return (
    <div className="App">
      <div>App</div>
      {props.childRoutes}
    </div>
  );
}
