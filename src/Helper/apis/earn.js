import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'
export const getTaskList = async (params, isLoading) => {
  const res = await ajax.get('tasks', params, isLoading)
  storeUtil.setEarnInfo(res)
  console.log(res, 'res====')
  return res
}

export const completeTask = async (params, otherConfig = {}) => {
  const res = await ajax.post(
    'tasks/complete',
    params,
    false,
    false,
    otherConfig
  )
  return res
}
