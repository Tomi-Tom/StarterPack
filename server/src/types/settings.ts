export const LANG = ["en", "fr", "ko"] as const
export type Lang = (typeof LANG)[number]
export const THEME = ["light", "dark", "auto"] as const
export type Theme = (typeof THEME)[number]