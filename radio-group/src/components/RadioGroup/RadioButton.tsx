import React, { useContext } from 'react'

import { RadioContext } from './RadioContext'

type Props = {
  value: string
  children: React.ReactNode
}

export function RadioButton(props: Props) {
  const { value, setValue } = useContext(RadioContext)

  const isActive = value === props.value

  const className = 'radio-button ' + (isActive ? 'active' : '')
  return (
    <button className={className} onClick={() => setValue(isActive ? null : props.value)}>
      {props.children}
    </button>
  )
}
