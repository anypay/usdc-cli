import {Command, Flags} from '@oclif/core'

import { polygon } from 'usdc'

export default class PolygonBalance extends Command {

  static enableJsonFlag = true

  static description = 'Show Polygon USDC Balance'

  static examples = [
    `usdc polygon balance --address=0xA77547a3fB82a5Fa4DB408144870B69c70906989 --json`,
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

    const {flags} = await this.parse(PolygonBalance)

    const { address } = flags

    const balance = await polygon.getUSDCBalance({ address })

    this.log(`Balance: ${balance}`)

    return {address, balance}
  }
}
