const handler = app =>
  app.get('/', (_, res) => {
    console.log('v1 route')
    res.status(200).json('help')
  })

export default handler
