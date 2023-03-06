import {Args, Command, Flags} from '@oclif/core'

import * as usdc from 'usdc'

export default class Hello extends Command {
  static description = 'List USDC Balances for Each Chain'

  static examples = [
    `$ usdc balances`,
  ]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    this.log(`list usdc balances for each chain`)

  }
}
