import { useState, createContext, useCallback, useContext, useEffect } from "react"
import { getUsers } from "../../http/user"

const UserContext = createContext()
const { Provider } = UserContext

const useProvider = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    getUsers().then(res => console.log('res=> ', res))
  }, [])
  const login = useCallback(() => {

  }, [])

  return {
    user,
    setUser
  }
}

const UserProvider = ({ children }) => {
  const value = useProvider()

  return <Provider value={value}>{children}</Provider>
}

export const useUser = () => useContext(UserContext)
export default UserProvider