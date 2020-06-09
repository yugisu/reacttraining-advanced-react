import React, { useContext } from 'react'

import { AudioPlayerContext } from './Context'

export function Progress() {
  const { time, actions } = useContext(AudioPlayerContext)

  const progress = time.overall && (time.current / time.overall) * 100

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const elementBounds = e.currentTarget.getBoundingClientRect()

    const relativeClickX = e.clientX - elementBounds.left

    const selectedTime = time.overall * (relativeClickX / elementBounds.width)

    actions.setTime(selectedTime)
  }

  return (
    <div className="progress" onClick={handleProgressClick}>
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}
