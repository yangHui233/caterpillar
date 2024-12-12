import history from '@/Router/history'

export const jumpUrl = (url, type) => {
  if (url.startsWith('https') || url.startsWith('http')) {
    type === 0 ? window.location.replace(url) : (window.location.href = url)
  } else {
    type === 0 ? history.replace(url) : history.push(url)
  }
}

export const showErrorView = () => {
  jumpUrl('/error')
}
