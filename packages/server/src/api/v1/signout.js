const handler = app =>
  app.get('/signout', (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.status(400).json({ error: 'Unable to signout' })
        } else {
          res.status(200).json({ user: null })
        }
      })
    } else {
      res.end()
    }
  })

export default handler
