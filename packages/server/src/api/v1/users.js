const handler = router => router.get('/users', (_req, res) => {
  res.status(200).json({ users: ['talha', 'areeb', 'waiz', 'umair'] })
})

export default handler
