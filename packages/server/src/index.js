import { SERVER_PORT } from 'common'
import { setupApp } from './config/app'
import { OUTPUT_EXPRESS_ROUTES } from './config/constants'

setupApp().then(app => {
  app.listen(SERVER_PORT, async () => {
    if (OUTPUT_EXPRESS_ROUTES) {
      const { default: routeCat } = await import('express-routes-catalogue')
      routeCat.terminal(app)
    }

    console.log(`server listening at ${SERVER_PORT}`)
  })
})
