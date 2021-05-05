export default{
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "1234",
   "database": "houser-subscription",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ]
}