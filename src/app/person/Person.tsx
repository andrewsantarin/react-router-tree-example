import React, { FunctionComponent } from 'react';

import { RouteTreeComponentProps } from 'app/routing/RouteTreeNode';


export const Person: FunctionComponent<RouteTreeComponentProps> = function Person(props) {
  return (
    <div>
      <div>Person</div>
      {props.childRoutes}
    </div>
  );
}
