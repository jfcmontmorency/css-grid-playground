import clsx, { ClassValue } from 'clsx'

export function cn(...args: ClassValue[]): string {
  return clsx(...args)
}

export function safelyJoinCss(...args: (string | null | undefined)[]): string {
  return args
    .map((value: string | null | undefined): string | undefined => {
      if (!value) {
        return
      }
      return value.trim().replace(/;$/, '')
    })
    .filter(Boolean)
    .join('; ')
}

export function indentLines(str: string, indent = 2): string {
  const lines = str.split('\n')

  return (
    ' '.repeat(indent) +
    lines
      .map((line) => ' '.repeat(indent) + line.trimStart())
      .join('\n')
      .trim()
  )
}

export function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}
