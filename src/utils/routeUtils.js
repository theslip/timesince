export function isRouteActive (renderProps, routeName) {
  return renderProps.routes.map((route) => route.path === routeName).filter((bool) => bool)[0] || false
}
