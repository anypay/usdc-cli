import {Command} from '@oclif/core'

export default class SolanaHistory extends Command {
  static description = 'List USDC Transaction History for Solana Wallet'

  static examples = [
    `usdc solana history`,
  ]

  static flags = {}

  static args = {}

  async run(): Promise<void> {
    this.log(SolanaHistory.description)
  }
}
