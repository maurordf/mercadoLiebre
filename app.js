let express = require ("express");
let server = express();
let path = require ("path");

server.use(express.static("public"));

const PORT = process.env.PORT || 3030;

server.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:3030');    
})


server.get ("/",(req, res) => {
    res.sendFile (path.resolve("./views/home.html"));
});
server.get ("/login",(req, res) => {
    res.sendFile (path.resolve("./views/login.html"));
});
server.get ("/register",(req, res) => {
    res.sendFile (path.resolve("./views/register.html"));
});