# firestarter-init.sh
# ~~~~~~~~~~~~~~~~~~~
# Convenience script to call the `init-wordpress-site.sh` script in the
# Vagrant server

# Get current site name
site=${PWD##*/}

# Call composer install if wp-core hasn't been downloaded
if [ ! -e www/wp-core ]; then
  if ! type "composer" > /dev/null 2>&1 ; then
    printf "\033[93m\033[1m%s:\033[39m\033[0m Running composer through Vagrant. Please install 'composer' in the future.\n" "Warning" $1
    cmd="composer install --working-dir=\"\${FOREFRONT_SITES_DIR}/$site\""
    vagrant ssh -c "$cmd"
  else
    composer install
  fi
fi

# Call the init script
vagrant ssh -c "init-wordpress-site $site"
