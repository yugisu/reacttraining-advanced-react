import React, { useState } from 'react'

import { RadioContext } from './RadioContext'

type Props = {
  legend: string
  children: React.ReactNode
}

export function RadioGroup(props: Props) {
  const [radioValue, setRadioValue] = useState<string | null>(null)

  return (
    <RadioContext.Provider value={{ value: radioValue, setValue: setRadioValue }}>
      <fieldset className="radio-group">
        <legend>{props.legend}</legend>
        {props.children}
      </fieldset>
    </RadioContext.Provider>
  )
}
