# firestarter-init.sh
# ~~~~~~~~~~~~~~~~~~~
# Convenience script to call the `init-wordpress-site.sh` script in the
# Vagrant server

# Get current site name
site=${PWD##*/}

# Call the init script
vagrant ssh -c "init-wordpress-site $site"
