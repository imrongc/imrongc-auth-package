import React, { ReactNode, createContext, useContext } from 'react'
import { appCookies } from '../utils/appCookies'
import { isAxiosError } from 'axios'
import { getUserLogout } from '../api/GET_Logout'

interface UangcermatAuthContextInterface {
  logout: () => void
}

export const UangcermatAuthContext = createContext<UangcermatAuthContextInterface>({
  logout: () => undefined,
})

export const UangcermatAuthProvider = ({ children }: { children: ReactNode }) => {
  const { removeCookie } = appCookies()
  const logout = async () => {
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
      return error
    }
  }

  return (
    <UangcermatAuthContext.Provider
      value={{
        logout,
      }}
    >
      {children}
    </UangcermatAuthContext.Provider>
  )
}

export const useUangcermatAuth = () => useContext(UangcermatAuthContext)
