import React, { useContext } from 'react'
import { FaPause, FaPlay, FaStepForward, FaStepBackward } from 'react-icons/fa'

import { AudioPlayerContext } from './Context'
import { PB } from './types'

const JUMP_TIME = 10

export function Play() {
  const { playbackState, actions } = useContext(AudioPlayerContext)

  return (
    <button
      className="icon-button"
      onClick={actions.play}
      disabled={playbackState === PB.PLAYING}
      title="play"
    >
      <FaPlay />
    </button>
  )
}

export function Pause() {
  const { playbackState, actions } = useContext(AudioPlayerContext)

  return (
    <button
      className="icon-button"
      onClick={actions.pause}
      disabled={playbackState === PB.PAUSED}
      title="pause"
    >
      <FaPause />
    </button>
  )
}

export function PlayPause() {
  const { playbackState, actions } = useContext(AudioPlayerContext)

  const isPlaying = playbackState === PB.PLAYING

  return isPlaying ? (
    <button className="icon-button" onClick={actions.pause} title="pause">
      <FaPause />
    </button>
  ) : (
    <button className="icon-button" onClick={actions.play} title="play">
      <FaPlay />
    </button>
  )
}

export function JumpForward() {
  const { time, actions } = useContext(AudioPlayerContext)

  const canJumpForward = time.overall - time.current > JUMP_TIME

  return (
    <button
      className="icon-button"
      onClick={() => actions.setTime((currentTime) => currentTime + JUMP_TIME)}
      disabled={!canJumpForward}
      title="Forward 10 Seconds"
    >
      <FaStepForward />
    </button>
  )
}

export function JumpBack() {
  const { time, actions } = useContext(AudioPlayerContext)

  const canJumpBackward = time.current > JUMP_TIME

  return (
    <button
      className="icon-button"
      onClick={() => actions.setTime((currentTime) => currentTime - JUMP_TIME)}
      disabled={!canJumpBackward}
      title="Back 10 Seconds"
    >
      <FaStepBackward />
    </button>
  )
}
