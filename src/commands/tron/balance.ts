import {Command, Flags} from '@oclif/core'

import { tron } from 'usdc'

export default class TronBalance extends Command {

  static enableJsonFlag = true

  static description = 'Show Tron USDC Balance'

  static examples = [
    `usdc tron balance --address=TBhbDUxvnVkPYhPEDQtEY1ARvTwETLynyz --json`,
  ]

  static flags = {
    address: Flags.string({
        char: 'a',
        summary: 'address to check balance for',
        required: true
    })
  }

  static args = {}

  async run(): Promise<{address: string, balance: number}> {

    const {flags} = await this.parse(TronBalance)

    const { address } = flags

    const balance = await tron.getUSDCBalance({ address })

    this.log(`Balance: ${balance}`)

    return {address, balance}
  }
}
