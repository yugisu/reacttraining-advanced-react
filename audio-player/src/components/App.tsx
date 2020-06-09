import React from 'react'

import mario from 'static/mariobros.mp3'
import podcast from 'static/podcast.mp3'

import { AudioPlayer } from 'components/AudioPlayer/AudioPlayer'
import { Play, Pause, PlayPause, JumpBack, JumpForward } from 'components/AudioPlayer/Buttons'
import { Progress } from 'components/AudioPlayer/Progress'

export function App() {
  return (
    <div className="exercise">
      <AudioPlayer source={mario}>
        <Play /> <Pause /> <span className="player-text">Mario Bros. Remix</span>
        <Progress />
      </AudioPlayer>

      <AudioPlayer source={podcast}>
        <PlayPause /> <JumpBack /> <JumpForward />{' '}
        <span className="player-text">React30 Episode 010: React Virtualized</span>
        <Progress />
      </AudioPlayer>
    </div>
  )
}
