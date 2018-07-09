# set-db-mode.sh
# ~~~~~~~~~~~~~~

# Entry Function ###############################################################
main() {

  # Get current site name
  site=${PWD##*/}
  path_to_site="/var/www/sites/$site"

  # Print database mode options
  echo ""
  echo -e "You are configuring which database that '\033[36m$site\033[39m' uses."
  echo ""
  echo "  [1] Use shared database server"
  echo "  [2] Use local database server"
  echo ""

  # Parse selected database mode option
  read -p "Please select an option from above [1,2]: "
  echo ""
  case $REPLY in
    1 ) set_shared_db ;;
    2 ) set_local_db ;;
    * )
      echo "No valid option selected."
      exit 1 ;;
  esac

}

# Other Functions ##############################################################

# Define a function to configure the database mode to shared
set_shared_db() {
  vagrant ssh -c "configure-site-db $site shared"
}

# Define a function to configure the database mode to local
set_local_db() {
  vagrant ssh -c "configure-site-db $site local"
}

main
