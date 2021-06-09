
docker exec -it mysqldb_db_1 bash;
mysql -u root -p
create database housebuy;
create user 'admin'@'localhost' identified by 'qwer1234';
grant all privilegs on * . * to 'admin'@'localhost';
flush privileges;
