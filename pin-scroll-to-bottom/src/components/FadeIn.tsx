import React, { useState, useEffect } from 'react'

type Props = {
  children: React.ReactElement
}

export function FadeIn(props: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const { className } = props.children.props

  return React.cloneElement(props.children, {
    className: className + (mounted ? ' fade-in' : ''),
  })
}
