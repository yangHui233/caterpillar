import ajax from '@/Helper/ajax.js'

export const login = (params, isLoading) => {
  return ajax.post('userinfo/userNewlogin', params, isLoading)
}
