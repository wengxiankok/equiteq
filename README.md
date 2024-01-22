For this assessment, I've overwritten the given bootstrap and used bootstrap 5.3.2. I have also used Advanced Custom Fields for the Post Types and CPT UI for the Custom Post Type.
a. Expert - Used Advanced Custom Fields
b. Industry - Created as taxonomy via CPT UI
c. Location - Created as taxonomy via CPT UI

Furthermore, I have used a boilr template and a script to install WordPress via vagrant. The script command is only able to run on MacOS. Under the "tasks" folder, server.json serves as a local domain which allows for more accurate checking and display of certain Javascript and CSS styling.

If you are running the project the same way as I do, you will need to navigate to "public/wp-config/local.php" and change the DB_NAME, DB_USER, DB_PASSWORD accordingly. Once all is set up, you can use "gulp dev" to build the project. All the files will be minified towards the public folder.

I have also moved the working files to the "source" folder and sorted accordingly.

For the filtering function, I have implemented React into it as I believe with filtering functions, using React/Next.Js would be quicker and more efficient. By using React, I have implemented AJAX to get the data from WordPress in the API folder.