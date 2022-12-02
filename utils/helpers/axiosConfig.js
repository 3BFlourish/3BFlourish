import storage from './storage'

export const axiosConfigHeader = (params = {}) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storage.getAuth()}`,
      Accept: 'application/json',
    },
    params,
  }
}
