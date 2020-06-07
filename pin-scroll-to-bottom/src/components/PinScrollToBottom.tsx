import React, { useEffect } from 'react'

type Props = {
  subscribeTo: any
  children: React.ReactElement
}

export function PinScrollToBottom({ children, subscribeTo }: Props) {
  useEffect(() => window.scrollTo(0, document.body.scrollHeight), [subscribeTo])

  return children
}
