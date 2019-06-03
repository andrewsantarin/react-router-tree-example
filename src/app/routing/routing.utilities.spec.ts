import React, { FunctionComponent } from 'react';
import { isNullOrUndefined } from 'util';

import { applyRouteTreeParentPath } from './routing.utilities';
import { RouteTreeNodeProps, RouteTreeComponentProps } from './RouteTreeNode';


const DummyComponent: FunctionComponent<RouteTreeComponentProps> = function DummyComponent() {
  return React.createElement('div');
}

describe('applyRouteTreeParentPath', () => {
  it('should exist', () => {
    expect(applyRouteTreeParentPath).toBeDefined();
  });

  it('does not mutate the original route tree object', () => {
    function getDeepestRoutePath(tree: RouteTreeNodeProps): RouteTreeNodeProps['path'] {
      if (!isNullOrUndefined(tree.routes)) {
        return getDeepestRoutePath(tree.routes[0]);
      }

      return tree.path;
    }

    const oldTree: RouteTreeNodeProps = {
      path: '/',
      component: DummyComponent,
      routes: [
        {
          path: '/person',
          component: DummyComponent,
          routes: [
            {
              path: '/andrew',
              component: DummyComponent,
            },
          ],
        },
      ],
    };

    const newTree = applyRouteTreeParentPath(oldTree);

    const oldRoutePath = getDeepestRoutePath(oldTree);
    const newRoutePath = getDeepestRoutePath(newTree);

    expect(newRoutePath).toBe('/person/andrew');
    expect(oldRoutePath).toBe('/andrew');
    expect(oldRoutePath).not.toBe(newRoutePath);
  });
});


export default undefined;
