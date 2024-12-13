;(function (win, lib) {
  var doc = win.document
  var docEl = doc.documentElement
  var metaEl = doc.querySelector('meta[name="viewport"]')
  var flexibleEl = doc.querySelector('meta[name="flexible"]')
  var dpr = 0
  var scale = 0
  var tid
  var flexible = lib.flexible || (lib.flexible = {})

  console.log('lib.js====')

  if (checkSpecialDl()) {
    scale = 1
    dpr = 1
    if (!metaEl) {
      metaEl = doc.createElement('meta')
      metaEl.setAttribute('name', 'viewport')
      metaEl.setAttribute(
        'content',
        'width=device-width, initial-scale=' +
          scale +
          ', maximum-scale=' +
          scale +
          ', minimum-scale=' +
          scale +
          ', user-scalable=no'
      )
      if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl)
      } else {
        var wrap = doc.createElement('div')
        wrap.appendChild(metaEl)
        doc.write(wrap.innerHTML)
      }
    }
  } else if (metaEl) {
    console.warn('将根据已有的meta标签来设置缩放比例')
    var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
    if (match) {
      scale = parseFloat(match[1])
      dpr = parseInt(1 / scale)
    }
  } else if (flexibleEl) {
    var content = flexibleEl.getAttribute('content')
    if (content) {
      var initialDpr = content.match(/initial\-dpr=([\d\.]+)/)
      var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/)
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1])
        scale = parseFloat((1 / dpr).toFixed(2))
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1])
        scale = parseFloat((1 / dpr).toFixed(2))
      }
    }
  }

  if (!dpr && !scale) {
    var devicePixelRatio = win.devicePixelRatio
    dpr = devicePixelRatio
    scale = 1 / dpr

    var dataDpr
    if (devicePixelRatio >= 2.5 && (!dpr || dpr >= 2.5)) {
      dataDpr = 3
    } else if (devicePixelRatio >= 1.5 && (!dpr || dpr >= 1.5)) {
      dataDpr = 2
    } else {
      dataDpr = 1
    }

    docEl.setAttribute('data-dpr', dataDpr)
  }
  if (!doc.querySelector('meta[name="viewport"]')) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    // 顺便说一句，flexible这里是没有width=device-width配置的，改动后加上了。不加上可能会出现页面变形问题。
    metaEl.setAttribute(
      'content',
      'width=device-width, initial-scale=' +
        scale +
        ', maximum-scale=' +
        scale +
        ', minimum-scale=' +
        scale +
        ', user-scalable=no'
    )
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl)
    } else {
      var wrap = doc.createElement('div')
      wrap.appendChild(metaEl)
      doc.write(wrap.innerHTML)
    }
  }

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width
    if (width / dpr > 540) {
      width = 540 * dpr
    }
    var rem = width / 10
    docEl.style.fontSize = rem + 'px'
    flexible.rem = win.rem = rem
  }
  // 获取当前链接中指定名字的参数var
  function getParamSearchByName(name) {
    var values = decodeURIComponent(
      (window['location'].search.match(
        RegExp('[?|&|/]' + name + '=([^&|?&]+)')
      ) || [, null])[1]
    )
    if (isNullOrEmpty(values)) {
      values = decodeURIComponent(
        (window['location'].hash.match(
          RegExp('[?|&|/]' + name + '=([^&|?&]+)')
        ) || [, null])[1]
      )
    }
    return isNullOrEmpty(values) || values == 'null' ? '' : values
  }
  // 获取url中的指定名字参数
  // 对象是否为空
  function isNullOrEmpty(obj) {
    var result =
      obj == null ||
      obj == undefined ||
      obj == '' ||
      obj == 'null' ||
      obj == 'undefined' ||
      typeof obj == 'undefined'
    if (result && (obj != 0 || obj != '0')) {
      return result
    } else {
      return false
    }
  }
  /**
   * 获取导流标识，url中有就用并且存入session
   */
  function getDlType() {
    let dlType = getParamSearchByName('dl')
    let dlTypeSession = sessionStorage.getItem('dlType')
    if (dlType) {
      sessionStorage.setItem('dlType', dlType)
      return dlType
    }
    return dlTypeSession
  }
  function checkSpecialDl() {
    if (getDlType() == 'kp') return true
    return false
  }

  win.addEventListener(
    'resize',
    function () {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    },
    false
  )

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px'
  } else {
    doc.addEventListener(
      'DOMContentLoaded',
      function (e) {
        doc.body.style.fontSize = 12 * dpr + 'px'
      },
      false
    )
  }

  refreshRem()

  flexible.dpr = win.dpr = dpr
  flexible.refreshRem = refreshRem
  flexible.rem2px = function (d) {
    var val = parseFloat(d) * this.rem
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px'
    }
    return val
  }
  flexible.px2rem = function (d) {
    var val = parseFloat(d) / this.rem
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem'
    }
    return val
  }
})(window, window['lib'] || (window['lib'] = {}))
