import React from 'react'
import * as dialog from '@/Components/Global/export'

class SDK extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(dialog).map((key) => {
          return (
            <div
              onClick={() => {
                dialog[key]()
              }}>
              {key}
            </div>
          )
        })}
      </div>
    )
  }
}

export default SDK
