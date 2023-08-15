import { api } from "../utils/http"


export const getUsers = () => api.get('/users')