import { RouteTreeNodeProps } from './RouteTreeNode';
import { isNullOrUndefined } from 'util';


/**
 * (recursive) Prefixes the path of each route node in the route `tree` object with the path of its parent.
 *
 * **Note:** This method returns a modified copy of the original route `tree` object.
 *
 * @export
 *
 * @param {RouteTreeNodeProps} tree A route node tree
 *
 * @returns {RouteTreeNodeProps} A new route `tree` object with parent-prefixed paths.
 */
export const applyRouteTreeParentPath = function applyRouteTreeParentPath(tree: RouteTreeNodeProps): RouteTreeNodeProps {
  const newTree = {
    ...tree,
  };

  if (newTree.routes) {
    newTree.routes = [
      ...newTree.routes.map((route) => {
        let newRoute = {
          ...route,
        };

        if (isNullOrUndefined(route.path)) {
          return newRoute;
        }

        const parentPath = !isNullOrUndefined(newTree.path) && newTree.path !== '/' ? newTree.path : '';
        newRoute.path = `${parentPath}${newRoute.path}`;
        newRoute = applyRouteTreeParentPath(newRoute);

        return newRoute;
      })
    ];
  }

  return newTree;
}
