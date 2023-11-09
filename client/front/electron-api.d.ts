import type { API } from '../back/preload'

declare global {
  interface Window {
    electron: API
  }
}
