import { Router } from "express"
import { apiRoot } from "./constants"
import { readdir, stat } from "fs/promises"
import { join } from "path"


const walkRoutes = async (apiDir, app) => {
  const items = await readdir(apiDir)
  for (const item of items) {
    const itemPath = join(apiDir, item)
    const stats = await stat(itemPath)
    if (stats.isDirectory()) {
      const router = new Router({ mergeParams: true })
      app.use(`/${itemPath}`, router)
      walkRoutes(itemPath, router)
    } else {
      const handler = await import(itemPath)
      handler.default?.(app)
    }
  }
  return app
}

const setupRoutes = async app => {
  const apiRouter = await walkRoutes(apiRoot, new Router())
  
  app.use('/api', apiRouter)
}

export default setupRoutes
