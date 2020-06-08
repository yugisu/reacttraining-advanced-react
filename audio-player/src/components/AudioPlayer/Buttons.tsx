import React from 'react'
import { FaPause, FaPlay, FaStepForward, FaStepBackward } from 'react-icons/fa'

export function Play() {
  return (
    <button className="icon-button" onClick={undefined} disabled={undefined} title="play">
      <FaPlay />
    </button>
  )
}

export function Pause() {
  return (
    <button className="icon-button" onClick={undefined} disabled={undefined} title="pause">
      <FaPause />
    </button>
  )
}

export function PlayPause() {
  return null
}

export function JumpForward() {
  return (
    <button
      className="icon-button"
      onClick={undefined}
      disabled={undefined}
      title="Forward 10 Seconds"
    >
      <FaStepForward />
    </button>
  )
}

export function JumpBack() {
  return (
    <button
      className="icon-button"
      onClick={undefined}
      disabled={undefined}
      title="Back 10 Seconds"
    >
      <FaStepBackward />
    </button>
  )
}
