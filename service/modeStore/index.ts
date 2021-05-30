import { setCookie, parseCookies, destroyCookie } from 'nookies'

const COOKIE_NAME = 'COOKIE_DARK_MODE'

export const modeStore = {
  storeMode (mode: string) {
    const DAY_IN_SECONDS = 86400
    setCookie(null, COOKIE_NAME, mode, {
      path: '/',
      maxAge: DAY_IN_SECONDS * 7
    })
  },

  checkMode () {
    const cookies = parseCookies()
    const check = cookies[COOKIE_NAME]
    return check
  },

  deletCookie () {
    destroyCookie(null, COOKIE_NAME)
  }
}
