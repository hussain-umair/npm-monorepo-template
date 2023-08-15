import UserProvider from "./User"

const AppProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>
}

export default AppProvider
