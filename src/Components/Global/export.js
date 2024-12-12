import $ from './index'

export const buyToolsDialog = (params = {}) => {
  $.dialog({
    dialogName: 'buyToolsDialog',
    handleCancel: () => {
      $.hide('dialog')
    },
    ...params,
  })
}

export const youToBeDialog = (params = {}) => {
  $.dialog({
    dialogName: 'youToBeDialog',
    handleCancel: () => {
      $.hide('dialog')
    },
    ...params,
  })
}

export const shareDialog = (params = {}) => {
  $.dialog({
    dialogName: 'shareDialog',
    handleCancel: () => {
      $.hide('dialog')
    },
    ...params,
  })
}

export const signInDialog = (params = {}) => {
  $.dialog({
    dialogName: 'signInDialog',
    handleCancel: () => {
      $.hide('dialog')
    },
    ...params,
  })
}

export const updateDialog = (params = {}) => {
  $.dialog({
    dialogName: 'updateDialog',
    handleCancel: () => {
      $.hide('dialog')
    },
    ...params,
  })
}

export const showLoading = (params = {}) => {
  $.loading()
}

export const hideLoading = (params = {}) => {
  $.hideLoading()
}

export const showErrorDialog = (params = {}) => {
  $.dialog({
    dialogName: 'errorDialog',
  })
}
