type Routes =
  | '/login'
  | '/user/:id'
  | '/logout'
  | '/signup'
  | '/user/:id/friends'
  | '/post/:id'

type onlyUrlParamRoutes = Extract<Routes, `${string}:${string}`>
