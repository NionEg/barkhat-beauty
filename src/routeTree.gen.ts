import { Route as rootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'
import { Route as PrivacyRoute } from './routes/privacy'

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  PrivacyRoute,
])
