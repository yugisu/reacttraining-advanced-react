import React from 'react'

type Props = {
  source: string
}

export class AudioPlayer extends React.Component<Props> {
  render() {
    return (
      <div className="audio-player">
        <audio
          src={undefined}
          onTimeUpdate={undefined}
          onLoadedData={undefined}
          onEnded={undefined}
          ref={(n) => undefined}
        />
        {this.props.children}
      </div>
    )
  }
}
