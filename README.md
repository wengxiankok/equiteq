# Boilr
A Modern Boilerplate to kickstart your next Front-End Project.
***

## How To Use
##### 1. Develop
Starts a local server with browserSync.
```bash
$ gulp dev
```

##### 2. Build
Only rebuilds files without starting a server.
```bash
$ gulp build
```

#### Special Flags
Use these in conjunction with the tasks above.

Example:
```bash
gulp dev --production --quick
```

#### 1. Production Environment
Minifies and uglifies assets.
```bash
# Either the full word ..
--production
# .. or this
-p
```

#### 2. Quick Start
Skips minifying images to start server faster.
```bash
# Either the full word ..
--quick
# .. or this
-q
```

#### 3. PHP Mode
Sets the watcher to watch for `.php` instead.
```bash
--php
```
