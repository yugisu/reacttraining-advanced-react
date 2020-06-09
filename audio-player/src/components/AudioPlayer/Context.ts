import React from 'react'

import { PlaybackState } from './types'

export type TAudioPlayerContext = {
  playbackState: PlaybackState
  time: {
    current: number
    overall: number
  }
  actions: {
    play: () => void
    pause: () => void
    setTime: (arg: number | ((prevValue: number) => number)) => void
  }
}

export const AudioPlayerContext = React.createContext<TAudioPlayerContext>({
  playbackState: 'paused',
  time: {
    current: 0,
    overall: 0,
  },
  actions: {
    play: () => null,
    pause: () => null,
    setTime: () => null,
  },
})
