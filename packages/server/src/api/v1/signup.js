import User from '../../db/models/User'

const handler = app =>
  app.post('/signup', async (req, res) => {
    const { body } = req
    try {
      const { email, password } = body
      let user = await User.findOneBy('email', email)

      if (user) {
        return res.status(400).json({ error: `This ${email} already exist` })
      }

      user = await User.create({ email, password })
      res.status(200).json({ user })
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })

export default handler
