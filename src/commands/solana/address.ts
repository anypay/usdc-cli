import {Command} from '@oclif/core'

export default class SolanaAddress extends Command {
  static description = 'Show Solana USDC Deposit Address'

  static examples = [
    `usdc solana address`,
  ]

  static flags = {}

  static args = {}

  async run(): Promise<void> {
    this.log(SolanaAddress.description)
  }
}
