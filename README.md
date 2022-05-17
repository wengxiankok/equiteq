# Firestarter
Firestarter is a WordPress stack and folder structure that is optimised for
build tools and best practices.

Together with the [Forefather](https://git.forefront.com.my/lib/forefather)
development server, Firestarter allows you to quickly set up new WordPress
based projects.

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
The following steps are for projects that has already been setup by another
developer. If you're setting up a new project, see
[setting up new projects](#setting-up-new-projects) instead. If you want to
migrate an existing project, see
[migrating existing projects](#migrating-existing-projects).

> ```bash
> # 1. Download or clone this repository into the forefather `sites/` directory
> $ git clone <repository_url> <project_name>
> 
> # 2. Enter the directory
> $ cd <project_name>
> 
> # 3. Call the init script to download WordPress files
> $ ./firestarter-init.sh
> 
> # 4. You're done! If this project uses Boilr, proceed to installing npm dependencies.
> ```

### Setting up new projects
These steps are for new projects only. Ignore this if you are cloning from an
existing repository.

> ```bash
> # 1. Download or clone the firestarter repository
> $ git clone https://git.forefront.com.my/lib/firestarter.git <project_name>
> 
> # 2. Enter the directory
> $ cd <project_name>
> 
> # 3. (Optional) If you want to use Boilr, switch to the `boilr` branch
> $ git checkout boilr
> 
> # 4. Stop tracking the `firestarter` GitLab repository
> $ rm -rf .git
> 
> # 5. Call the init script to download WordPress files
> $ ./firestarter-init.sh
> 
> # 6. Configure database settings in wp-config/development.php
> 
> # 7. You're done! You may now proceed to pushing this to a new Git repository.
> ```

### Migrating existing projects
If you want to migrate an existing project into Firestarter, follow these steps:

> 1. In your *existing* project directory, create a new folder called `public/`
     and move all your WordPress files into the subdirectory.
> 2. Copy and replace the following files *from the firestarter repository* into your project directory.
>     * `public/wp-config.php`
>     * `public/wp-config/*.php`
>     * `.gitattributes`
>     * `.gitignore` (Merge with your existing one, if any)
>     * `firestarter-init.sh`
>     * `wp-cli.yml`
> 3. Edit and specify which WordPress version to use in `firestarter-init.sh`
> 4. Configure database settings in `wp-config/development.php`
> 5. Your final folder structure should look somewhat like this:
> 
> ```bash
> your-project-name/
>   ├─ public/
>   |    ├─ wp-config/
>   |    |    ├─ development.php
>   |    |    ├─ local.sample.php
>   |    |    └─ production.sample.php
>   |    ├─ wp-content/
>   |    |    └─ # Your content files
>   |    ├─ index.php
>   |    └─ wp-config.php
>   ├─ .gitattributes
>   ├─ .gitignore
>   ├─ firestarter-init.sh
>   └─ wp-cli.yml
> ```
> 
> Depending on how your project is set up, you may need to update your development
> database URLs.

### Switching between multiple `wp-config` files
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
