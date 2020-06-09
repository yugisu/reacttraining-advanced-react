export const PB = {
  PLAYING: 'playing',
  PAUSED: 'paused',
} as const

export type PlaybackState = typeof PB[keyof typeof PB]
