import fs from 'fs/promises'

export const writeFile = async (tableName, data) => {
  const stringifyData = JSON.stringify(data)
  await fs.writeFile(tableName, stringifyData, { encoding: 'utf8' })
}

export const readFile = async tableName => {
  try {
    const data = await fs.readFile(tableName, { encoding: 'utf8' })
    return JSON.parse(data)
  } catch (err) {
    console.log('err=> ', err)
    throw new Error(`Can't read ${tableName}`)
  }
}
