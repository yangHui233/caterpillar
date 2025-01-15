import React from 'react'
import * as dialog from '@/Components/Global/export'

class SDK extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(dialog).map((key) => {
          return (
            <div
              style={{
                padding: '10px',
                backgroundColor: 'red',
                margin: '10px',
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: '100px',
                fontSize: '20px',
                color: '#fff',
              }}
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
