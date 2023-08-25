import passport from 'passport'

const handler = app =>
  app.post('/login', passport.authenticate('local'), async (req, res) => {
    const { user } = req

    res.status(200).json({ user })
  })

export default handler
