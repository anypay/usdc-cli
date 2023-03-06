import {Command} from '@oclif/core'

export default class World extends Command {
  static description = 'Pay a Payment Request URL with USDC on Solana'

  static examples = [
    `usdc solana pay --url=https://anypayx.com/r/aG4331bf`,
  ]

  static flags = {}

  static args = {}

  async run(): Promise<void> {
    this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
