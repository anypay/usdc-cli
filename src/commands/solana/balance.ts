import {Command, Flags} from '@oclif/core'

import { solana } from 'usdc'

export default class SolanaBalance extends Command {

  static enableJsonFlag = true

  static description = 'Show Solana USDC Balance'

  static examples = [
    `usdc stellar balance --address=GA6DN27AG5FTVGUFPCUHCKJ6KOK33FL5GED3K7QD2FSN6HCXW3G4BGXP --json`
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

    const {flags} = await this.parse(SolanaBalance)

    const { address } = flags

    const balance = await solana.getUSDCBalance({ address })

    this.log(`Balance: ${balance}`)

    return {address, balance}
  }
}
