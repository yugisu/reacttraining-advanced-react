import React, { Component } from 'react'
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'

import { RadioGroup } from 'components/RadioGroup/RadioGroup'
import { RadioButton } from 'components/RadioGroup/RadioButton'

export class App extends Component {
  render() {
    return (
      <div>
        <RadioGroup legend="Radio Group">
          <RadioButton value="back">
            <FaBackward />
          </RadioButton>
          <RadioButton value="play">
            <FaPlay />
          </RadioButton>
          <RadioButton value="pause">
            <FaPause />
          </RadioButton>
          <RadioButton value="forward">
            <FaForward />
          </RadioButton>
        </RadioGroup>
      </div>
    )
  }
}
