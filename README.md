![Why Hello There!](logo.png)  
The Modern Front-End Dev Boilerplate.

## What is Boilr
'Boilr' is a front-end boilerplate built to make starting a new project a painless experience.

## Features
- **SASS** - Make writing CSS fun again.
- **Webpack** - Bundle up your JavaScript.
- **Babel + ES6** - Take advantage of the latest JavaScript features.
- **Image Optimizer** - Optimize images for improved site load times.
- **Local Server with BrowserSync** - Develop locally with support for live reloading, style injection and proxy servers support.
- **Quick FTP Deployment** - Quickly and easily upload files to a specified FTP server.

## How To Use
To use Boilr, there are only 2 main commands you need to know.

```bash
$ gulp build        # Builds all assets
```
and
```bash
$ gulp dev          # Starts local development server
```
&nbsp;
##### Building for production
To build for production, just add the `-p` flag to the end.
```bash
$ gulp dev -p       # Starts local development server with production assets
```
```bash
$ gulp build -p     # Builds production ready assets
```  
&nbsp;
##### Working with a dev server / proxy
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
├─ package.json
├─ gulpfile.babel.js
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

## Gulp Tasks
This is a list of all gulp tasks available for use.  

Usable by typing as such.
```bash
$ gulp <task name>
```

#### Main Tasks
##### `dev`
Starts a development local server with auto-reloading and CSS injection.
##### `build`
Builds all assets.

&nbsp;
#### Single Tasks
##### `watcher`
Starts only the file watcher to work without a server.
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

&nbsp;
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
