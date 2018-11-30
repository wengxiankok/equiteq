# Firestarter
Firestarter is a WordPress stack and folder structure that is optimised for
build tools and best practices.

Together with the [Forefather](https://git.forefront.com.my/lib/forefather)
development server, Firestarter allows you to quickly set up new WordPress
based projects with minimal effort and zero configuration.

## Features
* [Boilr](https://git.forefront.com.my/lib/Boilr) — ES6, SASS, BrowserSync, image minification and many more
* Folder structure optimised for developers, Git and build tools
* Flexible wp-config configuration
* Defaults to shared database server <sup>[1](#footnote-1)</sup>

## Requirements
Make sure you have the following dependencies before continuing:
* [Forefather Vagrant Server](https://git.forefront.com.my/lib/forefather)
* [Composer](https://getcomposer.org/)
* Access to a bash-based terminal (macOS Terminal, Windows Git Bash, Windows Subsystem for Linux)

## Usage
```bash
# 1. Download this repository or clone it into the forefather `sites/` directory
$ git clone https://git.forefront.com.my/lib/firestarter.git <project_name>

# 2. Enter the directory
$ cd <project_name>

# 3. (Optional) If you want to use Boilr, switch to the `boilr` branch
$ git checkout boilr

# 3. Call the init script to download WordPress files
$ ./firestarter-init.sh

# 4. (If not already configured) Modify database settings in wp-config/development.php

# 5. Stop tracking the `firestarter` GitLab repository
$ rm -rf .git
```

### Switching between `wp-config` files
Firestarter has been modified to lookup for multiple `wp-config` files. It loads
the first available config file in the `public/wp-config` directory in this order:
1. `wp-config/production.php` (create this file for production servers)
2. `wp-config/local.php` (create this file for your local modifications)
3. `wp-config/development.php` (default)

So to override the default `development.php` configuration, simply create a new
file according to the hierarchy above. Unlike `development.php`, the other two
files will be ignored by Git, so your changes will only affect you.

### Switching to a local database
By default, Firestarter uses a shared database server for development. If you
would like to use an isolated local database server running on Forefather, simply
copy `wp-config/local.sample.php` to `wp-config/local.php` and modify the
settings accordingly.

---
<sup id="footnote-1">[1] Only works while in office</sup>
