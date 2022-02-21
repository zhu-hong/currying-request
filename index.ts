import { AxiosInstance, AxiosStatic } from 'axios'

type Args = Record<any, any>

interface IFinReturn {
  get: (url?: string, args?: Args) => Promise<any>
  post: (url?: string, args?: Args) => Promise<any>
}

const curryingRequest = (axios: AxiosInstance | AxiosStatic) => {
  return (baseURL?: string): IFinReturn => {
    return {
      async post(url?: string, args?: Args) {
        const { data } = await axios({
          baseURL,
          method: 'POST',
          url,
          data: args,
        })
        return data
      },
      async get(url?: string, args?: Args) {
        const { data } = await axios({
          baseURL,
          method: 'GET',
          url,
          params: args,
        })
        return data
      },
    }
  }
}

export default curryingRequest