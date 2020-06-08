import React from 'react'

type Props = {
  value: string
}

export class RadioButton extends React.Component<Props> {
  render() {
    const isActive = false // <-- should come from somewhere
    const className = 'radio-button ' + (isActive ? 'active' : '')
    return <button className={className}>{this.props.children}</button>
  }
}
