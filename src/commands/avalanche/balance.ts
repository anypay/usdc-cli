import {Command, Flags} from '@oclif/core'

import { avalanche } from 'usdc'

export default class AvalancheBalance extends Command {

  static enableJsonFlag = true

  static description = 'Show Avalanche USDC Balance'

  static examples = [
    `usdc avalanche balance --address=0x4da4bcf92ab8160906e5123c52da6c61a165adc4 --json`,
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

    const {flags} = await this.parse(AvalancheBalance)

    const { address } = flags

    const balance = await avalanche.getUSDCBalance({ address })

    this.log(`Balance: ${balance}`)

    return {address, balance}
  }
}
