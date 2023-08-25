import { join } from 'path'
import { storeRootDir } from '../../config/constants'
import { readFile, writeFile } from '../utils'

const userDataFilename = 'users.json'
const userStore = join(storeRootDir, userDataFilename)

class User {
  constructor(user) {
    this.email = user.email
    this.password = user.password
  }

  static async findOneBy(key, value) {
    const users = await readFile(userStore)

    for (const user of users) {
      if (user[key] === value) return user
    }

    return null
  }

  static async create(user) {
    const users = await readFile(userStore)
    users.push(user)
    await writeFile(userStore, users)
    return new User(user)
  }
}

export default User
