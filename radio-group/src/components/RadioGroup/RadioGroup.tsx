import React from 'react'

type Props = {
  legend: string
}

export class RadioGroup extends React.Component<Props> {
  render() {
    return (
      <fieldset className="radio-group">
        <legend>{this.props.legend}</legend>
        {this.props.children}
      </fieldset>
    )
  }
}
