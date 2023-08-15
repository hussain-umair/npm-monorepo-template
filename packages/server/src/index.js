import { SERVER_PORT } from 'common'
import { setupApp } from './config/app'


setupApp().then(app => app.listen(SERVER_PORT, () => {
  console.log(`server listening at ${SERVER_PORT}`)
}))
