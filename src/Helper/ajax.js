import axios from 'axios'
import $q from 'q'
import config from '@/Config'
import Loading from '@/Components/Loading'
import com from '@/Utils/common'

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
      let info = {
        msg: error.message,
        url: error.config.originUrl.replace(/^https\:\/\/([^/]*)/, ''),
      }
      com.showErrorView(info)
    }
    return Promise.reject(error)
  }
)

function requestHandle(params) {
  const defer = $q.defer()
  if (params.isLoading) {
    Loading.showLoading()
  }
  axios(params)
    .then((res) => {
      if (!params.errorSelf) {
        if (res.data.status === 0) {
          defer.resolve(res.data.content)
        } else {
          res.data.message &&
            Loading.showToast(res.data.message, () => {
              defer.reject(res.data)
            })
        }
      } else {
        defer.resolve(res)
      }
    })
    .catch((err) => {
      const { isShowErrorPage } = params.data || params.params

      Loading.hideLoading()
      // jump error page
      if (isShowErrorPage) {
        com.showErrorView()
        return
      }
      Loading.showToast(err.message)
    })
    .finally(() => {
      if (params.isLoading) {
        Loading.hideLoading()
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
    let headers = {}

    params.isShowErrorPage === undefined && (params.isShowErrorPage = true)

    const requestOptions = {
      method: type,
      url: url,
      headers,
      isLoading,
      errorSelf,
    }

    if (isupload) {
      headers['Content-Type'] = 'multipart/form-data'
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
  // todo====处理接口请求url

  return url
}
const Helper = {
  get(url, params = {}, isLoading = true, errorSelf = false, otherConfig = {}) {
    //业务侧接口请求 todo---
    params.userGid = ''
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
    isLoading = true,
    errorSelf = false,
    otherConfig = {}
  ) {
    let userGid = ''
    if (params instanceof FormData) {
      params.append('userGid', userGid)
    } else {
      params.userGid = userGid
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
