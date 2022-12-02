const tokenAuth = 'accessToken'

const saveAuth = (token) => {
  if (token) {
    window.localStorage.setItem(tokenAuth, token)
  }
}

const deleteAuth = () => {
  window.localStorage.removeItem(tokenAuth)
}

const getAuth = () => {
  return window.localStorage.getItem(tokenAuth) ? localStorage.getItem(tokenAuth) : ''
}

export default {
  getAuth,
  saveAuth,
  deleteAuth,
}
