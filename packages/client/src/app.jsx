import React from 'react'

import { formatter, logger } from 'common'
import './app.scss'


const App = () => {
  console.log('common=> ', formatter())
  console.log('common=> ', logger())
  console.log('refresher')
  return <>React Vite App</>
}

export default App