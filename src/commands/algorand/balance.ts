import {Command, Flags} from '@oclif/core'

import { algorand } from 'usdc'

export default class AlgorandBalance extends Command {

  static enableJsonFlag = true

  static description = 'Show Algorand USDC Balance'

  static examples = [
    `usdc algorand balance`,
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

    const {flags} = await this.parse(AlgorandBalance)

    const { address } = flags

    const balance = await algorand.getUSDCBalance({ address })

    this.log(`Balance: ${balance}`)

    return {address, balance}
  }
}
