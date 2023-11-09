import { ipcMain } from 'electron'
import Logger from '../../logger/'

type HandlerOptions = {
  channel?: string,
  withEvent: boolean,
}

export default function Handler(options: HandlerOptions = {withEvent: false}) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const channel = options.channel ?? descriptor.value.name
    const withEvent = options.withEvent
    Logger.log('debug', `Registering handler for ${channel}`)
    ipcMain.handle(channel, (event, ...args) => {
      if (withEvent)
        return descriptor.value(event, ...args)
      return descriptor.value(...args)
    })
  }
}
