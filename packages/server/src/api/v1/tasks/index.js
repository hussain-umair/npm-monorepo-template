const handler = app =>
  app.get('/tasks', (req, res) => {
    res.status(200).json({ tasks: ['task'] })
  })

export default handler
