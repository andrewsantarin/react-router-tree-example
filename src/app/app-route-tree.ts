import { RouteTreeNodeProps } from './routing/RouteTreeNode';
import { applyRouteTreeParentPath } from './routing/routing.utilities';

import { Person } from './person/Person';
import { Andrew } from './andrew/Andrew';

import { App } from './App';


export const appRouteTree: RouteTreeNodeProps = applyRouteTreeParentPath({
  path: '/',
  component: App,
  routes: [
    {
      path: '/person',
      component: Person,
      routes: [
        {
          path: '/andrew',
          component: Andrew,
        },
      ],
    },
  ],
});
