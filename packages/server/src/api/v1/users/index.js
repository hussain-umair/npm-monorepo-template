import { authMiddleware } from '../../../lib'

const handler = router =>
  router.use(authMiddleware()).get('/', (_req, res) => {
    res.status(200).json({ users: ['talha', 'areeb', 'waiz', 'umair'] })
  })

export default handler
