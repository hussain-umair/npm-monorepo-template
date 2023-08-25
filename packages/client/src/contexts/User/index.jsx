import {
  useState,
  createContext,
  // useCallback,
  useContext,
  useEffect,
} from 'react'
import { getUsers } from '../../http/user'

const UserContext = createContext()
const { Provider } = UserContext

const useProvider = () => {
  const [user, setUser] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getUsers().then(res => {
      const { data } = res
      console.log('res=> ', data)
      setUser({})
      setIsLoaded(true)
    })
  }, [])
  // const login = useCallback(() => {}, [])

  return {
    user,
    setUser,
    isLoaded,
  }
}

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const { isLoaded, ...userContext } = useProvider()

  return (
    <Provider value={userContext}>
      {isLoaded ? children : <>...loading</>}
    </Provider>
  )
}

export const useUser = () => useContext(UserContext)
export default UserProvider
