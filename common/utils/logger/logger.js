import chalk from 'chalk'
import { getStore } from '#common/utils/store/controller/store.js'

class LOGGER {
  constructor(_env) {
    // console.log(
    //     chalk.bgGray(`[logger init] The current env is ${env ?? 'not plugin'}.`)
    // )
  }

  /**
   * 普通消息
   * @param message{*}
   * @param args{*[]}
   */
  info(message, ...args) {
    console.log(chalk.blue(message, ...args))
  }

  /**
   * 警告
   * @param message{*}
   * @param args{*[]}
   */
  warn(message, ...args) {
    console.log(chalk.yellow(message, ...args))
  }

  /**
   * 错误信息
   * @param message{*}
   * @param args{*[]}
   */
  error(message, ...args) {
    console.log(chalk.red(message, ...args))
  }
}
const { env = null } = (await getStore('config')) ?? {}
export const logger = new LOGGER(env)
