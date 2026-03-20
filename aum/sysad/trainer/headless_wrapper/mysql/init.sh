#!/bin/bash
mysql -u root -p"root_strong_password" <<EOF
CREATE DATABASE IF NOT EXISTS app_db;
CREATE USER IF NOT EXISTS 'appuser'@'%' IDENTIFIED BY 'app_strong_password';
GRANT ALL PRIVILEGES ON app_db.* TO 'appuser'@'%';
FLUSH PRIVILEGES;
EOF