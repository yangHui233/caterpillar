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
