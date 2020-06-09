import React, { useState, useRef, useCallback } from 'react'

import { AudioPlayerContext, TAudioPlayerContext } from './Context'
import { PlaybackState } from './types'

type Props = {
  source: string
  children: React.ReactNode
}

export function AudioPlayer({ source, children }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [timeState, setTimeState] = useState({ current: 0, overall: 0 })

  const [playbackState, setPlaybackState] = useState<PlaybackState>('paused')

  const initializeTimeState = useCallback((e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const target = e.target as HTMLAudioElement

    setTimeState((prev) => ({
      ...prev,
      current: 0,
      overall: target.duration,
    }))
  }, [])

  const updateTimeState = useCallback((e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const target = e.target as HTMLAudioElement

    setTimeState((prev) => ({
      ...prev,
      current: target.currentTime,
    }))
  }, [])

  const play = useCallback(() => (setPlaybackState('playing'), audioRef.current?.play()), [])

  const pause = useCallback(() => (setPlaybackState('paused'), audioRef.current?.pause()), [])

  const setTime = useCallback<TAudioPlayerContext['actions']['setTime']>((updater) => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime

      audioRef.current.currentTime = typeof updater === 'function' ? updater(currentTime) : updater
    }
  }, [])

  return (
    <AudioPlayerContext.Provider
      value={{ playbackState, time: timeState, actions: { play, pause, setTime } }}
    >
      <div className="audio-player">
        <audio
          src={source}
          onTimeUpdate={updateTimeState}
          onLoadedData={initializeTimeState}
          onEnded={pause}
          ref={audioRef}
        />
        {children}
      </div>
    </AudioPlayerContext.Provider>
  )
}
