import {Command, Flags} from '@oclif/core'

import { hedera } from 'usdc'

export default class HederaBalance extends Command {

  static enableJsonFlag = true

  static description = 'Show Hedera USDC Balance'

  static examples = [
    `usdc hedera balance`,
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

    const {flags} = await this.parse(HederaBalance)

    const { address } = flags

    const balance = await hedera.getUSDCBalance({ address })

    this.log(`Balance: ${balance}`)

    return {address, balance}
  }
}
