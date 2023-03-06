import {Command} from '@oclif/core'

export default class World extends Command {
  static description = 'Send USDC to a single Solana address'

  static examples = [
    `usdc solana send --address=Ef9ca7Uwkw9rrbdaWnUrrdMZJqPYykZ1dPLEv9yMpEjB --amount=100000`,
  ]

  static flags = {}

  static args = {}

  async run(): Promise<void> {
    this.log('Send USDC Solana To An Address')
  }
}
