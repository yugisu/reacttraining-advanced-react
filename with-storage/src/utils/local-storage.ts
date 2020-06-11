let subscribers: (() => void)[] = []

export const set = (key: string, value: any) => {
  localStorage.setItem(key, value)
  subscribers.forEach((s) => s())
}

export const subscribe = <Fn extends (...args: any[]) => void>(fn: Fn) => {
  subscribers.push(fn)

  return () => {
    subscribers = subscribers.filter((s) => s !== fn)
  }
}

export const get = <T>(key: string, defaultValue?: T): T =>
  JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
