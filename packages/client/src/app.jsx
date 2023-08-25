import './app.scss'
import { useUser } from './contexts/User'

const App = () => {
  const { user } = useUser()

  if (!user) {
    return <>Not Authenticated</>
  }
  return <>React Vite App</>
}

export default App
