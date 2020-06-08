import React from 'react'

export class Progress extends React.Component {
  render() {
    return (
      <div className="progress" onClick={undefined}>
        <div
          className="progress-bar"
          style={{
            width: '23%',
          }}
        />
      </div>
    )
  }
}
