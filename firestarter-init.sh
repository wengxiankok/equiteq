# firestarter-init.sh
# ~~~~~~~~~~~~~~~~~~~
# Convenience script to perform the following actions:
#   1. ssh into the server
#   2. cd into the current folder (from the vm side)
#   2. download WordPress core using `$ wp core download`

# Specify which WordPress version to download
version="5.9.3"

# Get current directory name
dir_name=${PWD##*/}

# Define commands to execute on the server
source_cmd="source ~/.bash_profile" # This loads the required environment variables
cd_cmd="cd \${FOREFRONT_SITES_DIR}/$dir_name"
download_cmd="wp core download --skip-content --version=\"${version}\""

# Run the commands on the server
vagrant ssh -- -t "$source_cmd && $cd_cmd && $download_cmd"
