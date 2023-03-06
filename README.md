oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g usdc-cli
$ usdc-cli COMMAND
running command...
$ usdc-cli (--version)
usdc-cli/0.0.3 darwin-x64 node-v16.13.1
$ usdc-cli --help [COMMAND]
USAGE
  $ usdc-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`usdc-cli algorand balance`](#usdc-cli-algorand-balance)
* [`usdc-cli avalanche balance`](#usdc-cli-avalanche-balance)
* [`usdc-cli balances`](#usdc-cli-balances)
* [`usdc-cli ethereum balance`](#usdc-cli-ethereum-balance)
* [`usdc-cli hedera balance`](#usdc-cli-hedera-balance)
* [`usdc-cli help [COMMANDS]`](#usdc-cli-help-commands)
* [`usdc-cli plugins`](#usdc-cli-plugins)
* [`usdc-cli plugins:install PLUGIN...`](#usdc-cli-pluginsinstall-plugin)
* [`usdc-cli plugins:inspect PLUGIN...`](#usdc-cli-pluginsinspect-plugin)
* [`usdc-cli plugins:install PLUGIN...`](#usdc-cli-pluginsinstall-plugin-1)
* [`usdc-cli plugins:link PLUGIN`](#usdc-cli-pluginslink-plugin)
* [`usdc-cli plugins:uninstall PLUGIN...`](#usdc-cli-pluginsuninstall-plugin)
* [`usdc-cli plugins:uninstall PLUGIN...`](#usdc-cli-pluginsuninstall-plugin-1)
* [`usdc-cli plugins:uninstall PLUGIN...`](#usdc-cli-pluginsuninstall-plugin-2)
* [`usdc-cli plugins update`](#usdc-cli-plugins-update)
* [`usdc-cli polygon balance`](#usdc-cli-polygon-balance)
* [`usdc-cli solana`](#usdc-cli-solana)
* [`usdc-cli solana address`](#usdc-cli-solana-address)
* [`usdc-cli solana balance`](#usdc-cli-solana-balance)
* [`usdc-cli solana history`](#usdc-cli-solana-history)
* [`usdc-cli solana pay`](#usdc-cli-solana-pay)
* [`usdc-cli solana request`](#usdc-cli-solana-request)
* [`usdc-cli solana send`](#usdc-cli-solana-send)
* [`usdc-cli stellar balance`](#usdc-cli-stellar-balance)
* [`usdc-cli tron balance`](#usdc-cli-tron-balance)
* [`usdc-cli wallet balances [FILE]`](#usdc-cli-wallet-balances-file)

## `usdc-cli algorand balance`

Show Algorand USDC Balance

```
USAGE
  $ usdc-cli algorand balance -a <value> [--json]

FLAGS
  -a, --address=<value>  (required) address to check balance for

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show Algorand USDC Balance

EXAMPLES
  usdc algorand balance
```

## `usdc-cli avalanche balance`

Show Avalanche USDC Balance

```
USAGE
  $ usdc-cli avalanche balance -a <value> [--json]

FLAGS
  -a, --address=<value>  (required) address to check balance for

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show Avalanche USDC Balance

EXAMPLES
  usdc avalanche balance --address=0x4da4bcf92ab8160906e5123c52da6c61a165adc4 --json
```

## `usdc-cli balances`

List USDC Balances for Each Chain

```
USAGE
  $ usdc-cli balances

DESCRIPTION
  List USDC Balances for Each Chain

EXAMPLES
  $ usdc balances
```

_See code: [dist/commands/balances/index.ts](https://github.com/anypay/usdc-cli/blob/v0.0.3/dist/commands/balances/index.ts)_

## `usdc-cli ethereum balance`

Show Ethereum USDC Balance

```
USAGE
  $ usdc-cli ethereum balance -a <value> [--json]

FLAGS
  -a, --address=<value>  (required) address to check balance for

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show Ethereum USDC Balance

EXAMPLES
  usdc ethereum balance --address=0x63fc765a644d31f87a2284fd4bf728c9d767d921 --json
```

## `usdc-cli hedera balance`

Show Hedera USDC Balance

```
USAGE
  $ usdc-cli hedera balance -a <value> [--json]

FLAGS
  -a, --address=<value>  (required) address to check balance for

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show Hedera USDC Balance

EXAMPLES
  usdc hedera balance
```

## `usdc-cli help [COMMANDS]`

Display help for usdc-cli.

```
USAGE
  $ usdc-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for usdc-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.6/src/commands/help.ts)_

## `usdc-cli plugins`

List installed plugins.

```
USAGE
  $ usdc-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ usdc-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.2/src/commands/plugins/index.ts)_

## `usdc-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ usdc-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ usdc-cli plugins add

EXAMPLES
  $ usdc-cli plugins:install myplugin 

  $ usdc-cli plugins:install https://github.com/someuser/someplugin

  $ usdc-cli plugins:install someuser/someplugin
```

## `usdc-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ usdc-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ usdc-cli plugins:inspect myplugin
```

## `usdc-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ usdc-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ usdc-cli plugins add

EXAMPLES
  $ usdc-cli plugins:install myplugin 

  $ usdc-cli plugins:install https://github.com/someuser/someplugin

  $ usdc-cli plugins:install someuser/someplugin
```

## `usdc-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ usdc-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ usdc-cli plugins:link myplugin
```

## `usdc-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ usdc-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ usdc-cli plugins unlink
  $ usdc-cli plugins remove
```

## `usdc-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ usdc-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ usdc-cli plugins unlink
  $ usdc-cli plugins remove
```

## `usdc-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ usdc-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ usdc-cli plugins unlink
  $ usdc-cli plugins remove
```

## `usdc-cli plugins update`

Update installed plugins.

```
USAGE
  $ usdc-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `usdc-cli polygon balance`

Show Polygon USDC Balance

```
USAGE
  $ usdc-cli polygon balance -a <value> [--json]

FLAGS
  -a, --address=<value>  (required) address to check balance for

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show Polygon USDC Balance

EXAMPLES
  usdc polygon balance
```

## `usdc-cli solana`

List USDC Balances for Each Chain

```
USAGE
  $ usdc-cli solana

DESCRIPTION
  List USDC Balances for Each Chain

EXAMPLES
  $ usdc balances
```

_See code: [dist/commands/solana/index.ts](https://github.com/anypay/usdc-cli/blob/v0.0.3/dist/commands/solana/index.ts)_

## `usdc-cli solana address`

Show Solana USDC Deposit Address

```
USAGE
  $ usdc-cli solana address

DESCRIPTION
  Show Solana USDC Deposit Address

EXAMPLES
  usdc solana address
```

## `usdc-cli solana balance`

Show Solana USDC Balance

```
USAGE
  $ usdc-cli solana balance -a <value> [--json]

FLAGS
  -a, --address=<value>  (required) address to check balance for

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show Solana USDC Balance

EXAMPLES
  usdc solana balance
```

## `usdc-cli solana history`

List USDC Transaction History for Solana Wallet

```
USAGE
  $ usdc-cli solana history

DESCRIPTION
  List USDC Transaction History for Solana Wallet

EXAMPLES
  usdc solana history
```

## `usdc-cli solana pay`

Pay a Payment Request URL with USDC on Solana

```
USAGE
  $ usdc-cli solana pay

DESCRIPTION
  Pay a Payment Request URL with USDC on Solana

EXAMPLES
  usdc solana pay --url=https://anypayx.com/r/aG4331bf
```

## `usdc-cli solana request`

Generate Payment Request URL to Receive USDC on Solana

```
USAGE
  $ usdc-cli solana request

DESCRIPTION
  Generate Payment Request URL to Receive USDC on Solana

EXAMPLES
  usdc solana request --amount=100000
```

## `usdc-cli solana send`

Send USDC to a single Solana address

```
USAGE
  $ usdc-cli solana send

DESCRIPTION
  Send USDC to a single Solana address

EXAMPLES
  usdc solana send --address=Ef9ca7Uwkw9rrbdaWnUrrdMZJqPYykZ1dPLEv9yMpEjB --amount=100000
```

## `usdc-cli stellar balance`

Show Stellar USDC Balance

```
USAGE
  $ usdc-cli stellar balance -a <value> [--json]

FLAGS
  -a, --address=<value>  (required) address to check balance for

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show Stellar USDC Balance

EXAMPLES
  usdc stellar balance
```

## `usdc-cli tron balance`

Show Tron USDC Balance

```
USAGE
  $ usdc-cli tron balance -a <value> [--json]

FLAGS
  -a, --address=<value>  (required) address to check balance for

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Show Tron USDC Balance

EXAMPLES
  usdc tron balance
```

## `usdc-cli wallet balances [FILE]`

describe the command here

```
USAGE
  $ usdc-cli wallet balances [FILE] [-n <value>] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ usdc-cli wallet balances
```
<!-- commandsstop -->
