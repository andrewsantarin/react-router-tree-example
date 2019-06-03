import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RouteTreeNode } from 'app/routing/RouteTreeNode';
import { appRouteTree } from 'app/app-route-tree';


export const Root: FunctionComponent<{}> = function Root() {
  return (
    <BrowserRouter>
      <RouteTreeNode {...appRouteTree} />
    </BrowserRouter>
  );
}
