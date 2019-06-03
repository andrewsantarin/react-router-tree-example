import React, { FunctionComponent, ReactNode } from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { isNullOrUndefined } from 'util';
import { StaticContext } from 'react-router';
import { LocationState } from 'history';


/**
 * Necessary props for any component which is rendered by a `<RouteTreeNode>` component.
 *
 * @export
 * @interface RouteTreeComponentProps
 * @extends {RouteComponentProps<Params, C, S>}
 * @template Params
 * @template C
 * @template S
 */
export interface RouteTreeComponentProps<
  Params extends { [K in keyof Params]?: string } = {},
  C extends StaticContext = StaticContext,
  S = LocationState
> extends RouteComponentProps<Params, C, S> {
  /**
   * Route children automatically rendered by the `<RouteTreeNode>` component.
   *
   * @type {ReactNode[]}
   * @memberof RouteTreeComponentProps
   */
  childRoutes?: ReactNode[]
}

export interface RouteTreeNodeProps extends RouteProps {
  component: React.ComponentType<RouteTreeComponentProps<any>> | React.ComponentType<any>;
  routes?: RouteTreeNodeProps[];
}

export const RouteTreeNode: FunctionComponent<RouteTreeNodeProps> = function RouteTreeNode({
  path,
  routes,
  component: RouteComponent,
}) {
  if (isNullOrUndefined(RouteComponent)) {
    throw new Error('\'component\' missing');
  }

  return (
    <Route
      path={path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <RouteComponent
          {...props}
          childRoutes={routes && routes.map((route, index) => (
            <RouteTreeNode
              {...route}
              key={index}
            />
          ))}
        />
      )}
    />
  );
}
