use("coffee-bean-db");

// Clear existing data
db.users.deleteMany({});

// Insert mock data for users collection
db.users.insertMany([
  {
    "_id": "a0001",
    "firstName": "Alice",
    "lastName": "Brown",
    "email": "alice@beancraft.com",
    "password": "$2b$10$hA1X8d9KjLmN2PqRsTuVWe",
    "phone": "0812345671",
    "role": "admin"
  },
  {
    "_id": "a0002",
    "firstName": "Bob",
    "lastName": "Green",
    "email": "bob@beancraft.com",
    "password": "$2b$10$wErTyUiOpAsDfGhJkLzXc",
    "phone": "0876543210",
    "role": "staff"
  },
  {
    "_id": "a0003",
    "firstName": "Charlie",
    "lastName": "Davis",
    "email": "charlie@beancraft.com",
    "password": "$2b$10$AbCdEfGhIjKlMnOpQrStUv",
    "phone": "0891122334",
    "role": "customer"
  },
  {
    "_id": "a0004",
    "firstName": "Diana",
    "lastName": "Wilson",
    "email": "diana@beancraft.com",
    "password": "$2b$10$ZxCvBnMqWeRtYuIoPaSdFg",
    "phone": "0823456789",
    "role": "customer"
  },
  {
    "_id": "a0005",
    "firstName": "Ethan",
    "lastName": "Taylor",
    "email": "ethan@beancraft.com",
    "password": "$2b$10$QwErTyUiOpAsDfGhJkLmNo",
    "phone": "0867891234",
    "role": "customer"
  },
  {
    "_id": "a0006",
    "firstName": "Fiona",
    "lastName": "Clark",
    "email": "fiona@beancraft.com",
    "password": "$2b$10$PoIuYtReWqAsDfGhJkLzXv",
    "phone": "0845678901",
    "role": "customer"
  },
  {
    "_id": "a0007",
    "firstName": "George",
    "lastName": "Miller",
    "email": "george@beancraft.com",
    "password": "$2b$10$MnBcVxZaSdFgHjKlQwErTy",
    "phone": "0834567890",
    "role": "customer"
  },
  {
    "_id": "a0008",
    "firstName": "Hannah",
    "lastName": "Moore",
    "email": "hannah@beancraft.com",
    "password": "$2b$10$YuIoPaSdFgHjKlZxCvBnMq",
    "phone": "0887654321",
    "role": "manager"
  },
  {
    "_id": "a0009",
    "firstName": "Ian",
    "lastName": "Anderson",
    "email": "ian@beancraft.com",
    "password": "$2b$10$TyUiOpAsDfGhJkLmNbVcXz",
    "phone": "0856789012",
    "role": "customer"
  },
  {
    "_id": "a0010",
    "firstName": "Julia",
    "lastName": "Thomas",
    "email": "julia@beancraft.com",
    "password": "$2b$10$AsDfGhJkLzXcVbNmQwErTy",
    "phone": "0801234567",
    "role": "staff"
  }
]);

