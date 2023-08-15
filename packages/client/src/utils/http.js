import { API_URI, apiRoot } from "common"

const defaultHeaders = Object.freeze({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})

const http = {
  getHeaders(additionalHeaders = {}) {
    return {
      ...defaultHeaders,
      ...additionalHeaders,
    }
  }
}

const defaultOptions = { method: 'GET' }
export const fetcher = async (
  requestUrl, 
  { handler, ...optionsParam } = defaultOptions
  ) => {
  const options = { ...defaultOptions, ...optionsParam}
  return fetch(requestUrl, options)
    .then(async res => {
      const { body, url, status } = res

      const { errors, error, ...resData } = await res.json(body)
        .catch(err => {
          console.log(err)
          return {}
        })

      return {
        url,
        status,
        data: Object.keys(resData).length ? resData : null,
        errors: errors || (error && [error]),
        error: error || (errors && errors[0])
      }
    }).catch(err => console.log(err))
}

export const api = {
  urlString: path => `${API_URI}${apiRoot}${path}`,
  get: (path, params, headers = {}) => {
    // TODO
    // concat params with url string
    const urlString = api.urlString(path)
    
    return fetcher(urlString, {
      method: 'GET',
      headers: http.getHeaders(headers)
    })
  },
  post: () => {},
  delete: () => {},
}