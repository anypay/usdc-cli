import {Command, Flags} from '@oclif/core'

import { ethereum } from 'usdc'

export default class EthereumBalance extends Command {

  

  static enableJsonFlag = true

  static description = 'Show Ethereum USDC Balance'

  static examples = [
    `usdc ethereum balance --address=0x63fc765a644d31f87a2284fd4bf728c9d767d921 --json`
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

    const {flags} = await this.parse(EthereumBalance)

    const { address } = flags

    const balance = await ethereum.getUSDCBalance({ address })

    this.log(`Balance: ${balance}`)

    return {address, balance}
  }
}
