import { join } from 'path'
import { v4 as uuidv4 } from 'uuid'

import { storeRootDir } from '../../config/constants'
import { readFile, writeFile } from '../utils'

const userDataFilename = 'users.json'
const userStore = join(storeRootDir, userDataFilename)

class User {
  constructor(user) {
    this.id = user.id
    this.email = user.email
    this.password = user.password
  }

  validatePassword(password) {
    if (!this.password) return false

    return this.password === password
  }

  static async findById(id) {
    const user = await User.findOneBy('id', id)

    if (user) return user

    throw new Error('User not found')
  }

  static async findOneBy(key, value) {
    const users = await readFile(userStore)

    for (const user of users) {
      if (user[key] === value) return new User(user)
    }

    return null
  }

  static async create(user) {
    const users = await readFile(userStore)
    users.push({ ...user, id: uuidv4() })
    await writeFile(userStore, users)
    return new User(user)
  }

  static async authenticate(email, password) {
    const user = await User.findOneBy('email', email)

    if (user && user.validatePassword(password)) {
      return user
    }

    throw new Error('Invalid email or password')
  }
}

export default User
