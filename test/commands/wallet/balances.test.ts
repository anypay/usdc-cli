import {expect, test} from '@oclif/test'

describe('wallet:balances', () => {
  test
  .stdout()
  .command(['wallet:balances'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['wallet:balances', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
