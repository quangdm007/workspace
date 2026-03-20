#!/bin/bash
<<<<<<< HEAD
mysql -u root -p"${MYSQL_ROOT_PASSWORD}" <<EOF
CREATE DATABASE IF NOT EXISTS ${DB_NAME};
CREATE USER IF NOT EXISTS '${DB_USER}'@'%' IDENTIFIED BY '${DB_PASSWORD}';
GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USER}'@'%';
=======
mysql -u root -p"root_strong_password" <<EOF
CREATE DATABASE IF NOT EXISTS app_db;
CREATE USER IF NOT EXISTS 'appuser'@'%' IDENTIFIED BY 'app_strong_password';
GRANT ALL PRIVILEGES ON app_db.* TO 'appuser'@'%';
>>>>>>> 02cbd143caee02de5565f79258b0246b07a6bba5
FLUSH PRIVILEGES;
EOF