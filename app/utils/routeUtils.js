export function isRouteActive (routerState, routeName) {
  return routerState.routes.map((route) => route.path === routeName).filter((bool) => bool).pop() || false
}

export function routeIsXml (routerState) {
  return routerState.routes.map((route) => route.ext === 'xml').filter((bool) => bool).pop() || false
}
