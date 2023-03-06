import {Command, Flags} from '@oclif/core'

import { stellar } from 'usdc'

export default class StellarBalance extends Command {

  static enableJsonFlag = true

  static description = 'Show Stellar USDC Balance'

  static examples = [
    `usdc stellar balance`,
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

    const {flags} = await this.parse(StellarBalance)

    const { address } = flags

    const balance = await stellar.getUSDCBalance({ address })

    this.log(`Balance: ${balance}`)

    return {address, balance}
  }
}
