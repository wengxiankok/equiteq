# Firestarter
Firestarter is a WordPress stack and folder structure that is optimised for
modern development tools and best practices.

Together with the [Forefather](https://git.forefront.com.my/websites/forefather)
development server, Firestarter allows you to quickly start up new WordPress
based projects with minimal effort and zero configuration.

## Features
* Folder structure optimised for developers and Git
* Zero configuration
* Interactive installation script

## Requirements
Make sure you have the following dependencies before continuing:
* [Forefather Vagrant Server](https://git.forefront.com.my/websites/forefather)
* [Composer](https://getcomposer.org/)
* Access to a bash-based terminal (macOS Terminal, Windows Git Bash, Windows Subsystem for Linux)

## Usage
```bash
# 1. Clone this repository into the forefather `sites/` directory
$ git clone https://git.forefront.com.my/websites/firestarter.git <project_name>

# 2. Enter the directory
$ cd <project_name>

# 3. Call the init script and run through the interactive installation
$ ./firestarter-init.sh

# 4. Remove the `firestarter` git repository
$ rm -rf .git
```

## Folder Structure
The WordPress folder structure has been reorganised for a better developer experience and for better integration with version control systems.

The biggest change is the movement of `wp-content` into an upper directory, and
moving the WordPress core files into its own subdirectory, `wp-core`.

```bash
www/                   # → The document root
  ├── index.php
  ├── wp-config.php    # → WordPress configuration. Do not need to edit unless it's production.
  ├── wp-content/
  │    ├── plugins/    # → Plugins directory. Place your plugins here.
  │    ├── themes/     # → Themes directory. Place your theme folders here.
  │    └── uploads/    # → Uploads directory. Do not commit.
  └── wp-core/         # → WordPress core files. Do not edit.
```
