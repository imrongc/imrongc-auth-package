import { getUserLogout } from '../api/GET_Logout'
import { ResponseMeInterface } from '../interface/UserInterface'
import { appCookies } from '../utils/appCookies'
import { isAxiosError } from 'axios'

export const useUangcermatAuth = () => {
  const { removeCookie } = appCookies()

  const logout = async (): Promise<ResponseMeInterface> => {
    try {
      const res = await getUserLogout()
      if (res && !res.error) {
        removeCookie({
          name: 'access_token',
        })
        removeCookie({
          name: 'refresh_token',
        })
      } else {
        alert(res.message)
      }
      return res
    } catch (error: any) {
      if (isAxiosError(error)) {
        alert(error?.message)
      }
      throw error
    }
  }

  return {
    logout
  }
}
