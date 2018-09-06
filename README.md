![Why Hello There!](logo.png)  
The Modern Front-End Developers Boilerplate.

## What is Boilr
`Boilr` is a front-end boilerplate built with [Gulp](https://gulpjs.com/) to make starting your next website an absolute breeze.

No configuration is requried to get started but if needed, `Boilr` is easily customisable and extendable to get it working the way you need.
<br>
<br>

## Features
- **Gulp** - Powerful toolkit for automating painful or time-consuming tasks.
- **SASS** - Featureful and powerful extension to CSS.
- **Webpack + Babel** - The latest JavaScript features available and bundled.
- **Image Optimisation** - Optimize images for improved site load times.
- **Local Server with BrowserSync** - Develop locally with support for live reloading, style injection and proxy servers support.  
<br>

## Getting Started
Before starting, ensure `gulp-cli` is installed globally.
```bash
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
$ yarn
```
<br>

## How To Use
To use Boilr, there are only 2 main commands you need to know.

```bash
$ gulp build        # Builds all assets
```
and
```bash
$ gulp dev          # Starts local development server
```
<br>
##### Building for production
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
In the case when you need to work off a development server, change the proxy value to you development server address.
```js
export const configs = {
  // ......
  browsersync: {
    // proxy: false,
    proxy: 'mydevserver.local',
    // ......
  },
  // ......
};
```
<br>
## Folder Structure
Boilr comes with a default folder structure that is easy to adopt, and fits with most development work.
```bash
Boilr
│  # Main folder for source files
├─ src/
│  ├─ sass           # scss
│  ├─ img            # images
│  ├─ js             # javascript
│  └─ index.html
│  
├─ static/           # Folder for static assets that do not need processing
├─ dist/             # Final output folder
│  
│  # Configuration Files
├─ tasks/
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
If ever you would like to customize Boilr to suit your preferences, you can easily do so by editing the `config.js` file located within the `tasks` folder.

```bash
Boilr
├─ tasks/
│  ├─ config.js
│  └─ ...
└─ ...
```

## Tasks Available
This is a list of all gulp tasks available for use.  

Usable by typing as such.
```bash
$ gulp <task name>
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
