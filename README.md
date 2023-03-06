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
usdc-cli/0.0.0 darwin-x64 node-v16.13.1
$ usdc-cli --help [COMMAND]
USAGE
  $ usdc-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`usdc-cli hello PERSON`](#usdc-cli-hello-person)
* [`usdc-cli hello world`](#usdc-cli-hello-world)
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

## `usdc-cli hello PERSON`

Say hello

```
USAGE
  $ usdc-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/anypay/usdc-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `usdc-cli hello world`

Say hello world

```
USAGE
  $ usdc-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ usdc-cli hello world
  hello world! (./src/commands/hello/world.ts)
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
<!-- commandsstop -->
