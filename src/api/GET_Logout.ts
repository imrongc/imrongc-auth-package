import { AxiosResponse } from 'axios'
import { ResponseMeInterface } from '../interface/UserInterface'

import { axiosAuthInstance } from './axios.authConfig'

export const getUserLogout = async (): Promise<ResponseMeInterface> => {
  return axiosAuthInstance
    .get('/logout')
    .then((res: AxiosResponse<ResponseMeInterface>) => res.data)
    .catch((err) => err)
}
