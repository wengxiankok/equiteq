![Why Hello There!](logo.png)  
The Modern Front-End Developers Boilerplate.

## What is Boilr
`Boilr` is a front-end boilerplate built with [Gulp](https://gulpjs.com/) to make starting your next website an absolute breeze.

No configuration is required to get started, but if needed `Boilr` is easily customisable and extendable to get it working the way you need.
<br>

## Features
- **Gulp** - Powerful toolkit for automating painful or time-consuming tasks.
- **SASS** - Featureful and powerful extension to CSS.
- **Webpack + Babel** - The latest JavaScript features available and bundled.
- **Image Optimisation** - Optimize images for improved site load times.
- **Local Server with BrowserSync** - Develop locally with support for live reloading, style injection and proxy servers support.  
<br>

## Prerequisites
##### Install gulp-cli
Before starting, ensure `gulp-cli` is installed globally.
```bash
# With npm
$ npm install gulp-cli -g

# With Yarn
$ yarn global add gulp-cli
```
<br>
You can confirm this by running:
```bash
gulp -v

# This should output:
# CLI version 2.0.1
# Local version 4.0.0
```
<br>
With that you can now proceed to clone this repository and get to working.
```bash
# Clone this repository
$ git clone https://git.forefront.com.my/lib/Boilr.git

# Recreate the repository
$ rm -rf .git
$ git init

# Install Modules
# with npm
$ npm install
# with yarn
$ yarn
```

## How To Use
##### Create server config file
Before starting, create a `server.json` config file in the tasks folder.

A sample file called `server.json.sample` is provided which you can duplicate and rename.

```bash
Boilr
├─ tasks/
│  ├─ server.json
│  └─ ...
└─ ...
```
<br>
##### Development Builds
To use Boilr, there are only 2 main commands you need to know.
```bash
$ gulp build        # Builds all assets
```
```bash
$ gulp dev          # Starts local development server
```
<br>
##### Production Builds
To build for production, just add the `-p` flag to the end.
```bash
$ gulp dev -p       # Starts local development server with production assets
```
```bash
$ gulp build -p     # Builds production ready assets
```  
<br>
For a full list of commands available, please refer the [Tasks Available](#tasks-available) section
## Working with a dev server / proxy
If you need to work with a development server or a proxy, you can easily do so by opening your `server.json` file and changing the value of the proxy field to your desired URL.

```js
{
  "proxy": "mydevserver.local",  
  // ......
};
```
<br>
## Folder Structure
Boilr comes with a default folder structure that is easy to adopt, and fits with most development work.
```bash
Boilr
│  # Main folder for source files
├─ source/
│  ├─ scss           # scss
│  ├─ img            # images
│  ├─ js             # javascript
│  └─ index.html
│  
├─ static/           # Folder for static assets that do not need processing
│  └─ ...
├─ dist/             # Final output folder
│  └─ ...
│  
│  # Tasks
├─ tasks/
│  └─ ...
│  
│  # Configuration Files
├─ .babelrc
├─ .eslint.json
├─ .gitignore
├─ gulpfile.babel.js
├─ logo.png
├─ package.json
├─ README.md
├─ tsconfig.json
├─ webpack.config.js
```

## Configuration
If ever you want to customize Boilr, you can easily do so by editing the `configs.js` file located within the `tasks` folder.

```bash
Boilr
├─ tasks/
│  ├─ configs.js
│  └─ ...
└─ ...
```

## Tasks Available
This is a list of all gulp tasks available which are usable as such.
```bash
# Development builds
$ gulp <task name>

# Production builds
$ gulp <task name> -p
```

#### Main Tasks
##### `dev`
Starts a development local server with auto-reloading and CSS injection.
##### `watcher`
Starts only the file watcher to work without a server.
##### `build`
Builds all assets.

<br>
#### Single Tasks
##### `deploy`
Uploads files to specified FTP server.
##### `pages`
Builds HTML and PHP files.
##### `styles`
Builds stylesheets and applies Autoprefixer and CSSNano.
##### `scripts`
Bundles JavaScript with Webpack.
#### `images`
Optimizes images.
##### `svg`
Generates SVG sprite sheets.
##### `copy`
Copies files from `static` to `dist`.

<br>
#### Cleaner Tasks
##### `clean:all`
Deletes all files in `dist`.
##### `clean:images`
Deletes only images.
##### `clean:css`
Deletes only `styles` folder.
##### `clean:pages`
Deletes only pages.
##### `clean:js`
Deletes only `scripts` folder.
