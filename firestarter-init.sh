# firestarter-init.sh
# ~~~~~~~~~~~~~~~~~~~
# Convenience script to call the `init-wordpress-site.sh` script in the
# Vagrant server

# Get current site name
site=${PWD##*/}

# Call composer install if wp-core hasn't been downloaded
if [ ! -e www/wp-core ]; then
  if ! type "composer" > /dev/null; then
    printf "\033[91m\033[1m%s:\033[39m\033[0m Please install 'composer' first.\n" "Error" $1
  else
    composer install
  fi
fi

# Call the init script
vagrant ssh -c "init-wordpress-site $site"
