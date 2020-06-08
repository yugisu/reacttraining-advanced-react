/*
- Make the Play button work
- Make the Pause button work
- Disable the play button if it's playing
- Disable the pause button if it's not playing
- Make the PlayPause button work
- Make the JumpForward button work
- Make the JumpBack button work
- Make the progress bar work
  - change the width of the inner element to the percentage of the played track
  - add a click handler on the progress bar to jump to the clicked spot

Here is the audio API you'll need to use, `audio` is the <audio/> dom nod
instance, you can access it as `this.audio` in `AudioPlayer`

```js
// play/pause
audio.play()
audio.pause()

// change the current time
audio.currentTime = audio.currentTime + 10
audio.currentTime = audio.currentTime - 30

// know the duration
audio.duration

// values to calculate relative mouse click position
// on the progress bar
event.clientX // left position *from window* of mouse click
const rect = node.getBoundingClientRect()
rect.left // left position *of node from window*
rect.width // width of node
```

Other notes about the `<audio/>` tag:

- You can't know the duration until `onLoadedData`
- `onTimeUpdate` is fired when the currentTime changes
- `onEnded` is called when the track plays through to the end and is no
  longer playing

Good luck!
*/

import React from 'react'

import mario from 'static/mariobros.mp3'
import podcast from 'static/podcast.mp3'

import { AudioPlayer } from './AudioPlayer/AudioPlayer'
import { Play, Pause, PlayPause, JumpBack, JumpForward } from './AudioPlayer/Buttons'
import { Progress } from './AudioPlayer/Progress'

export function App() {
  return (
    <div className="exercise">
      <AudioPlayer source={mario}>
        <Play /> <Pause /> <span className="player-text">Mario Bros. Remix</span>
        <Progress />
      </AudioPlayer>

      <AudioPlayer source={podcast}>
        <PlayPause /> <JumpBack /> <JumpForward />{' '}
        <span className="player-text">React30 Episode 010: React Virtualized</span>
        <Progress />
      </AudioPlayer>
    </div>
  )
}
