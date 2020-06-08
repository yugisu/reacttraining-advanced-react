import React from 'react'

type Context = {
  value: string | null
  setValue: (value: string | null) => void
}

export const RadioContext = React.createContext<Context>({
  value: null,
  setValue: () => void 0,
})
