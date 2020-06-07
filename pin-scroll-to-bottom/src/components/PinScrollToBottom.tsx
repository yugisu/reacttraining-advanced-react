import React, { useEffect, useState } from 'react'

const PINNED_THRESHOLD = 150

function checkShouldPin() {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement

  return scrollHeight - clientHeight - scrollTop < PINNED_THRESHOLD
}

type Props = {
  children: React.ReactElement
  pinnedThreshold?: number
}

export function PinScrollToBottom({ children }: Props) {
  const [shouldPin, setShouldPin] = useState(() => checkShouldPin())

  useEffect(() => {
    const handleScroll = () => setShouldPin(checkShouldPin())

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (shouldPin) {
      window.scrollTo(0, document.documentElement.scrollHeight)
    }
  }, [shouldPin, children])

  return children
}
