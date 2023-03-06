import {Command} from '@oclif/core'

export default class World extends Command {
  static description = 'Generate Payment Request URL to Receive USDC on Solana'

  static examples = [
    `usdc solana request --amount=100000`
  ]

  static flags = {}

  static args = {}

  async run(): Promise<void> {
    this.log(World.description)
  }
}
