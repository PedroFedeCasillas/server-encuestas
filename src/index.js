const server = require("./app");
const { PORT } = process.env;
const { conn } = require('./db');


server.listen(PORT, async () => {
   console.log('Server listernnig in port: ' + PORT);
   await conn.sync({force:true});
});

