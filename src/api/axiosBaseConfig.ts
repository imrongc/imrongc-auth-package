import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

export const axiosBaseConfigOptions: AxiosRequestConfig = {
  timeout: 30000,
}

const baseHeaders = {
  'x-platform': process.env.APP_PLATFORM,
}

export const axiosInterceptorRequest = async (headerConfig: InternalAxiosRequestConfig) => {
  const refresh_token = Cookies.get('refresh_token')

  if (refresh_token && headerConfig.headers) {
    headerConfig.headers.Authorization = `Bearer ${refresh_token}`
  }

  axios.defaults.headers.common['x-platform'] = baseHeaders['x-platform']

  return headerConfig
}
