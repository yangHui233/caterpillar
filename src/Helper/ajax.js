import axios from 'axios'
import $q from 'q'
import config from '@/Config'
import Toast from '@/Components/Toast'
import storeUtil from '@/Utils/store'
import {
  hideLoading,
  showErrorDialog,
  showLoading,
} from '@/Components/Global/export'

const REQUEST_TYPES = ['post', 'get']

const requestFunctions = {}

axios.defaults.timeout = 40000

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (!(error.message && error.message == 'abort')) {
      console.log('error', error)
      showErrorDialog()
    }
    return Promise.reject(error)
  }
)

function requestHandle(params) {
  const defer = $q.defer()
  if (params.isLoading) {
    showLoading()
  }

  axios(params)
    .then((response) => {
      const res = response.data
      if (!params.errorSelf) {
        if (res.status === 0) {
          defer.resolve(res.data)
          return
        }

        if (!params.otherConfig.isHideErrorToast) {
          return (
            res.msg &&
            Toast.info('', res.msg, () => {
              defer.reject(res)
            })
          )
        }

        defer.reject(res)

        return
      }

      defer.resolve(res)
    })
    .catch((err) => {
      if (!params.otherConfig.isHideErrorToast) {
        Toast.info(err.message || err.msg)
      }
    })
    .finally(() => {
      if (params.isLoading) {
        hideLoading()
      }
    })

  return defer.promise
}
REQUEST_TYPES.forEach((type) => {
  /**
   * @event ajax 请求
   * @params {String} url
   * @params {Object} params
   * @params errorSelf
   */
  requestFunctions[type] = (url, params, isLoading, errorSelf, otherConfig) => {
    let { isupload = false } = otherConfig || {}

    let headers = {
      ...(!url.includes('api/login')
        ? { Authorization: `Bearer ${storeUtil.getToken()}` }
        : {}),
      ...(isupload
        ? {
            'Content-Type': 'multipart/form-data',
          }
        : {}),
    }

    const requestOptions = {
      method: type,
      url: url,
      headers,
      isLoading,
      errorSelf,
      otherConfig,
    }

    switch (type) {
      case 'get':
        requestOptions.params = params
        break
      case 'post':
        requestOptions.data = params
        break
      default:
        break
    }

    return requestHandle(requestOptions)
  }
})
function handleParamsCom(url) {
  if (url.includes('?')) {
    url = url + '&'
  } else {
    url = url + '?'
  }

  return url
}
const Helper = {
  get(
    url,
    params = {},
    isLoading = false,
    errorSelf = false,
    otherConfig = {}
  ) {
    return requestFunctions.get(
      config.BASE_URL + handleParamsCom(url),
      params,
      isLoading,
      errorSelf,
      otherConfig
    )
  },
  post(
    url,
    params = {},
    isLoading = false,
    errorSelf = false,
    otherConfig = {}
  ) {
    if (params instanceof FormData) {
      // params.append('field', field)
    } else {
      // params.field = field
    }

    let baseurl = config.BASE_URL
    return requestFunctions.post(
      baseurl + handleParamsCom(url),
      params,
      isLoading,
      errorSelf,
      otherConfig
    )
  },
}

export default Helper
