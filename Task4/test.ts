const MOBILE_OS = {
  IOS: "IOS",
  Android: "Android",
} as const

type MOBILE_OS = keyof typeof MOBILE_OS
