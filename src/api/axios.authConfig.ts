import axios, { AxiosRequestConfig } from 'axios'

import { axiosBaseConfigOptions, axiosInterceptorRequest } from './axiosBaseConfig'

const defaultOptions: AxiosRequestConfig = {
  ...axiosBaseConfigOptions,
  baseURL: process.env.APP_AUTH_SERVICE_URL || process.env.AUTH_SERVICE_URL,
}
export const axiosAuthInstance = axios.create(defaultOptions)

axiosAuthInstance.interceptors.request.use(axiosInterceptorRequest)

axiosAuthInstance.interceptors.response.use((response) => response)
