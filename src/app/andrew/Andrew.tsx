import React, { FunctionComponent } from 'react';

import { RouteTreeComponentProps } from 'app/routing/RouteTreeNode';


export const Andrew: FunctionComponent<RouteTreeComponentProps> = function Andrew(props) {
  return (
    <div>
      <div>Andrew</div>
      {props.childRoutes}
    </div>
  );
}
