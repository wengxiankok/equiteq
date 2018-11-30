<?php

/**
 * The name of the database for WordPress.
 * @var string
 */
define('DB_NAME', 'insert_db_name_here');

/**
 * The MySQL database username.
 * @var string
 */
define('DB_USER', 'forefront');

/**
 * The MySQL database password.
 * @var string
 */
define('DB_PASSWORD', 'ffs12345');

/**
 * The MySQL hostname.
 * @var string
 */
define('DB_HOST', 'localhost');

/**
 * The database charset to use in creating database tables.
 * @var string
 */
define('DB_CHARSET', 'utf8');

/**
 * The database collate type. Don't change this if in doubt.
 * @var string
 */
define('DB_COLLATE', '');

/**
 * Authentication unique keys and salts. You can generate these at
 * https://api.wordpress.org/secret-key/1.1/salt/
 * @var string
 */
define('AUTH_KEY',         '[F$]lVy`Sp8MfKOK56HS5pa-f4q>hzLx`).E~lXR&Dd,pr{T9ibwo6E{:!.Q+v_!');
define('SECURE_AUTH_KEY',  'l_|w!O8jI+|?Hzac3c$IK|2m5)5k&Ch+3b1a{hNeru:`Pog;N-J%k=u`E:|i]P*l');
define('LOGGED_IN_KEY',    '(7SNpxq-$^X`||@o#F @*._<w08HLgF{JP{tNI4:m1zl 4ygz*ErRx<<}9mJN3D(');
define('NONCE_KEY',        'kTPPeCF9UO_)$VRc>4XLpwJ-P;Q7ZvRF@qh)LS;B|aS;h{j|<zBC+anZ2a^e]Ue,');
define('AUTH_SALT',        '[pqF2?1jj&+w|II`o_WmdDL%7+<xd(fl ;m}WVfK3i0blPfg>nxPx5_v,g]$9e$a');
define('SECURE_AUTH_SALT', 'wZ`[:@F@, {t_Tb/NQ,iki.w##j`Asu%bYa)^4P?>Ixmip|5bgM-:?9K;`I+aPDW');
define('LOGGED_IN_SALT',   'w-.X;J xlh0P(n-bUB$]P,~HX]u:D F*v?l#^N s*v<*Y[r7^Zl)@%/-a@df]]N*');
define('NONCE_SALT',       'FBi|qjt-EJ|R&H^h+@+96hT^BIZsd-Pl6XgO!ZXP>_2FNY+3FJ8{I+&fAfwN_[vU');

/**
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/**
 * The WordPress database table prefix.
 * @var string
 */
$table_prefix = 'wp_';
